// Aspetta che la pagina sia completamente caricata
document.addEventListener('DOMContentLoaded', function() {

    // Seleziona il form tramite l'ID che abbiamo appena aggiunto
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita che la pagina si ricarichi

        // Seleziona i div dei messaggi (Loading, Error, Success)
        const loading = document.querySelector('.loading');
        const errorMessage = document.querySelector('.error-message');
        const sentMessage = document.querySelector('.sent-message');

        // Mostra il caricamento e nasconde gli altri messaggi
        loading.classList.add('d-block');
        errorMessage.classList.remove('d-block');
        sentMessage.classList.remove('d-block');

        // Chiama EmailJS (Sostituisci 'TUO_SERVICE_ID' e 'TUO_TEMPLATE_ID')
        emailjs.sendForm('service_8c4t8le', 'template_4ufyr8q', this)
            .then(function() {
                // Successo: nascondi caricamento, mostra messaggio di successo e svuota il form
                loading.classList.remove('d-block');
                sentMessage.classList.add('d-block');
                form.reset();

                // Opzionale: fai scomparire il messaggio di successo dopo 5 secondi
                setTimeout(function() {
                    sentMessage.classList.remove('d-block');
                }, 5000);

            }, function(error) {
                // Errore: nascondi caricamento e mostra errore
                loading.classList.remove('d-block');
                errorMessage.innerHTML = "Ops! C'è stato un problema nell'invio del messaggio. Riprova più tardi.";
                errorMessage.classList.add('d-block');
                console.log('Errore EmailJS:', error);
            });
    });
});