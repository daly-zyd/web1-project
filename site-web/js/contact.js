function envoyerMessage(evenement) {
    evenement.preventDefault();
    
    var nom = document.getElementById('nom').value;
    var email = document.getElementById('email').value;
    var sujet = document.getElementById('sujet').value;
    var message = document.getElementById('message').value;
    
    var lienMailto = 'mailto:mohamedalizid182@gmail.com?subject=' + sujet + '&body=Nom: ' + nom + ' - Email: ' + email + ' - Message: ' + message;
    
    window.location.href = lienMailto;
    
    document.getElementById('message-confirmation').style.display = 'block';
    document.getElementById('contact-form').reset();
    
    setTimeout(function() {
        document.getElementById('message-confirmation').style.display = 'none';
    }, 5000);
}