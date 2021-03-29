pgem.ajaxifyForm=function(e,n=console.log,o=console.log){const t=document.querySelector("#"+e);t.addEventListener("submit",function(e){e.preventDefault();const a=new FormData(t);pgem.sendForm(a).then(e=>n(e)).catch(e=>o(e))})},pgem.sendForm=async function(e){e.append("ajax","true"),e.has("action")||e.append("action",pgem.action),e.has("pgem-nonce")||e.append("pgem-nonce",pgem.nonce),e.has("recipient")||e.append("recipient","default");let n=await fetch(pgem.url,{method:"POST",credentials:"same-origin",body:e});if(!n.ok)throw new Error(`HTTP Error: ${n.status}`);return n.text()},pgem.sendEmail=function(e,n,o="default",t=console.log,a=console.log){const c=new FormData;c.append("recipient",o),c.append("subject",e),c.append("body",n),pgem.sendForm(c).then(e=>t(e)).catch(e=>a(e))};
(function() {

  pgem.ajaxifyForm = function(id, success=console.log, error=console.log) {
    // Takes a form id and replaces its default 
    // submission behaviour with an ajax request.

    const form = document.querySelector('#' + id);
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

})();

(function() {

  pgem.ajaxifyForm = function(id, success=console.log, error=console.log) {
    // Takes a form id and replaces its default 
    // submission behaviour with an ajax request.

    const form = document.querySelector('#' + id);
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

})();
