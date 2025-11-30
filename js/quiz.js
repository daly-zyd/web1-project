function validerQuiz() {
    var reponsesCorrectes = {
        q1: 'a',
        q2: 'b',
        q3: 'b',
        q4: 'a',
        q5: 'b',
        q6: 'a',
        q7: 'b',
        q8: 'b',
        q9: 'b',
        q10: 'b',
        q11: 'c',
        q12: 'b'
    };

    var listeQuestions = {
        q1: 'Quelle est la capitale de la France? - Réponse: Paris',
        q2: 'Quelle est la capitale de la Tunisie? - Réponse: Tunis',
        q3: 'Quelle est la capitale du Japon? - Réponse: Tokyo',
        q4: 'Quelle est la capitale de l\'Allemagne? - Réponse: Berlin',
        q5: 'Quelle est la capitale de l\'Égypte? - Réponse: Le Caire',
        q6: 'Quelle est la capitale de l\'Espagne? - Réponse: Madrid',
        q7: 'Quelle est la capitale de l\'Italie? - Réponse: Rome',
        q8: 'Quelle est la capitale du Canada? - Réponse: Ottawa',
        q9: 'Quelle est la capitale du Brésil? - Réponse: Brasilia',
        q10: 'Quelle est la capitale de l\'Australie? - Réponse: Canberra',
        q11: 'Quelle est la capitale du Maroc? - Réponse: Rabat',
        q12: 'Quelle est la capitale de la Chine? - Réponse: Pékin'
    };

    for (var q in reponsesCorrectes) {
        var reponseChoisie = document.querySelector('input[name="' + q + '"]:checked');
        if (!reponseChoisie) {
            var numeroQuestion = q.replace('q', '');
            alert('Veuillez répondre à la question ' + numeroQuestion);
            return;
        }
    }

    var pointage = 0;
    var texteCorrections = '<h4>Résultats détaillés:</h4><ul>';

    for (var q in reponsesCorrectes) {
        var reponseChoisie = document.querySelector('input[name="' + q + '"]:checked');
        var estCorrect = reponseChoisie && reponseChoisie.value === reponsesCorrectes[q];
        
        if (estCorrect) {
            pointage++;
            texteCorrections += '<li style="color: green;">' + listeQuestions[q] + '</li>';
        } else {
            texteCorrections += '<li style="color: red;">' + listeQuestions[q] + '</li>';
        }
    }

    texteCorrections += '</ul>';

    document.getElementById('score').textContent = pointage;
    document.getElementById('corrections').innerHTML = texteCorrections;
    document.getElementById('resultat').style.display = 'block';

    document.getElementById('resultat').scrollIntoView();
}