(function() {

  pgem.ajaxifyForm = function(id, success=console.log, error=console.log) {
    // Takes a form id and replaces its default 
    // submission behaviour with an ajax request.

    const form = document.querySelector('#' + id);
    if ( form == null ) {
      return;
    }
    form.addEventListener('submit', function(e) {
      e.preventDefault();
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

  pgem.ajaxifyForm('pocketgecko-email',
    success=function() {

    },
    error=function() {

    }
  );



})();
