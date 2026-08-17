document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
  if (!form) {
    console.log('Form non trovato');
    return;
  }

  const loading = form.querySelector('.loading');
  const errorMessage = form.querySelector('.error-message');
  const sentMessage = form.querySelector('.sent-message');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // blocca il reload della pagina

    if (loading) loading.style.display = 'block';
    if (errorMessage) errorMessage.style.display = 'none';
    if (sentMessage) sentMessage.style.display = 'none';

    const params = {
      name: document.getElementById('name-field').value,
      email: document.getElementById('email-field').value,
      subject: document.getElementById('subject-field').value,
      message: document.getElementById('message-field').value
    };

    const serviceID = 'service_8c4t8le';
    const templateID = 'template_zeq3tv8';

    emailjs.send(serviceID, templateID, params)
      .then(function (res) {
        if (loading) loading.style.display = 'none';
        if (sentMessage) sentMessage.style.display = 'block';
        form.reset();
        console.log(res);
      })
      .catch(function (err) {
        if (loading) loading.style.display = 'none';
        if (errorMessage) {
          errorMessage.textContent = "Errore nell'invio. Riprova più tardi.";
          errorMessage.style.display = 'block';
        }
        console.log(err);
      });
  });
});