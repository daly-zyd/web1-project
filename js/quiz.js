function validerQuiz() {
    var bonnesReponses = ['a','b','b','a','b','a','b','b','b','b','c','b'];
    var questions = [
        'Capitale de la France? - Paris',
        'Capitale de la Tunisie? - Tunis',
        'Capitale du Japon? - Tokyo',
        'Capitale de l\'Allemagne? - Berlin',
        'Capitale de l\'Égypte? - Le Caire',
        'Capitale de l\'Espagne? - Madrid',
        'Capitale de l\'Italie? - Rome',
        'Capitale du Canada? - Ottawa',
        'Capitale du Brésil? - Brasilia',
        'Capitale de l\'Australie? - Canberra',
        'Capitale du Maroc? - Rabat',
        'Capitale de la Chine? - Pékin'
    ];

    for (var i = 1; i <= 12; i++) {
        if (!document.querySelector('input[name="q' + i + '"]:checked')) {
            alert('Veuillez répondre à la question ' + i);
            return;
        }
    }

    var score = 0;
    var resultats = '<h4>Résultats:</h4><ul>';
    
    for (var i = 1; i <= 12; i++) {
        var reponse = document.querySelector('input[name="q' + i + '"]:checked').value;
        var correct = reponse === bonnesReponses[i-1];
        
        if (correct) score++;
        
        resultats += '<li style="color: ' + (correct ? 'green' : 'red') + ';">' + questions[i-1] + '</li>';
    }

    resultats += '</ul>';

    document.getElementById('score').textContent = score;
    document.getElementById('corrections').innerHTML = resultats;
    document.getElementById('resultat').style.display = 'block';
    document.getElementById('resultat').scrollIntoView();
}