(function() {

  pgem.ajaxifyForm = function(
      form, 
      submit=null,
      success=console.log, 
      error=console.log) {
    // Takes a form id and replaces its default 
    // submission behaviour with an ajax request.
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      if ( typeof(submit) == 'function') submit();
      const data = new FormData(form);
      pgem.sendForm(data)
        .then(d => success(d))
        .catch(e => error(e));
    });
  }


  pgem.sendForm = async function(data) {
    // Takes a FormData object, sends an ajax request,
    // and returns the response as raw text.

    data.append('ajax', 'true');

    if ( ! data.has('action') ) {
      data.append('action', pgem.action);
    }

    if ( ! data.has('pgem-nonce') ) {
      data.append('pgem-nonce', pgem.nonce);
    }

    if ( ! data.has('recipient') ) {
      data.append('recipient', 'default');
    }


    let response = await fetch(pgem.url, {
      method: 'POST',
      credentials: 'same-origin',
      body: data,
    });

    if ( ! response.ok ) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    return response.text();
  };


  pgem.sendEmail = function(subject, body, 
      recipient='default', 
      success=console.log, 
      error=console.log
    ) {

    const data = new FormData();

    data.append('recipient', recipient);
    data.append('subject', subject);
    data.append('body', body);

    pgem.sendForm(data)
      .then(d => success(d))
      .catch(e => error(e));
  }

  window.addEventListener('load', function() {
    let form = document.querySelector('#pocketgecko-email');
    if ( form == null ) return;
    let btn = document.querySelector('#pocketgecko-email>input[type="submit"]');
    let output = document.querySelector('#pocketgecko-email>output');

    pgem.ajaxifyForm(form,

      submit = function() {
        btn.disabled = true;
        output.innerHTML = "<strong>" + pgem.sendingString + "<span id='pgem-dots'></span></strong>";
        window.sendingInterval = setInterval(function() {
          let dots = document.querySelector('#pgem-dots');
          dots.innerText += '.';
          if ( dots.innerText.length > 6 ) {
            dots.innerText = '';
          }
        }, 200);
      },

      success = function(data) {
        btn.disabled = false;
        output.innerHTML = "<strong>" + data + "</strong>";
        clearInterval(window.sendingInterval);
      },

      error = function(err) {
        btn.disabled = false;
        output.innerHTML = "<strong>" + error + "</strong>";
        clearInterval(window.sendingInterval);
      });

  });


})();
