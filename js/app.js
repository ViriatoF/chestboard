// Application

var app = {
  letters: ['A','B','C','D','E','F','G','H','I'],
  // Méthode init, starter de notre app
  init: function() {
    console.log('App : init');


    // je créer mes lignes (9)
    for(var line = 0; line < 9; line++) {
      // Pour chaque ligne je fais /...
      console.log('Génération de ligne ' + line);
      // génération de mes cases
      for(var column = 0; column < 9; column++) {
        //Pour chaque case je fais /...
        console.log('Génération de case ' + column);

        var square = app.createSquare(line, column);

        // Cible un élément du DOM pour ajouter chaque case
        // var chess = document.getElementById('chess');
        var chess = document.querySelector('#chess');

        // j'ajoute au DOM, à l'élément #chess
        chess.appendChild(square);
      }
    }
  },
  createSquare: function(line, column) {
    //Fonction consacrée à la création d'une case
    // Je créé la div (la case)
    var cell = document.createElement('div');

    // Génération d'une class css
    cell.className = app.getClassName(line, column);

    // Génération du contenu
    var num = 9 - line;
    var letter = app.letters[column];
    cell.textContent = letter + num;
    // cell.textContent = app.letters[column] + (8 - line);

    // ajouter un écouteur d'évenement
    cell.addEventListener('click', app.selectSquare);

    // renvoyer la case créée
    return cell;
  },

  selectSquare: function(evt) {
    // console.log(evt.target);

    // On alterne la class selected sur l'élément cliqué
    var selectedSquare = evt.target;
    selectedSquare.classList.toggle('selected');

    // On sélectionne toutes les cases
    var allSquares = document.querySelectorAll('.square');
    // On supprime pour chaque case la class selected
    for(var index = 0; index < allSquares.length; index++) {
      allSquares[index].classList.remove('selected');
    }
    // On ajoute la class selected sur l'élément cliqué
    // var selectedSquare = evt.target;
    selectedSquare.classList.add('selected');

  },


  getClassName: function(line, column) {
    var classname = 'square';
    // Si notre case est impair
    if ((line + column) %2 !== 0) {
      classname += ' square--brown';
    }
    // Renvoi de la class css générée
    return classname;
  }
};

// Attendre la génération du DOM, quand le DOM est prêt
document.addEventListener('DOMContentLoaded', app.init);
