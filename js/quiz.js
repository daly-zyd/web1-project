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
        q1: 'Que signifie HTML? - Réponse: Hyper Text Markup Language',
        q2: 'Quel langage est utilisé pour styliser une page web? - Réponse: CSS',
        q3: 'Quelle balise HTML est utilisée pour créer un lien hypertexte? - Réponse: &lt;a&gt;',
        q4: 'Quel framework CSS utilise des classes prédéfinies? - Réponse: Bootstrap',
        q5: 'Quelle méthode JavaScript est utilisée pour sélectionner un élément par son ID? - Réponse: getElementById()',
        q6: 'Que signifie CSS? - Réponse: Cascading Style Sheets',
        q7: 'Quelle balise HTML5 est utilisée pour définir un en-tête de page? - Réponse: &lt;header&gt;',
        q8: 'Quel opérateur JavaScript est utilisé pour comparer une valeur et un type? - Réponse: ===',
        q9: 'Quelle propriété CSS est utilisée pour changer la couleur du texte? - Réponse: color',
        q10: 'Quelle balise HTML est utilisée pour insérer une image? - Réponse: &lt;img&gt;',
        q11: 'Quel est le rôle principal de JavaScript dans une page web? - Réponse: Ajouter de l\'interactivité',
        q12: 'Quelle balise HTML5 est utilisée pour un contenu indépendant? - Réponse: &lt;article&gt;'
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