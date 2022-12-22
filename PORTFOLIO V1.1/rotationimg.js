var images = [
    "src/img/projet_wanded/jeu.png",
    "src/img/projet_wanded/menu.png",
    "src/img/projet_wanded/option.png",
    "src/img/projet_wanded/pause.png",
    "src/img/projet_wanded/gameover.png"
  ];

var currentIndex = 0;

function fadeIn(imgElement) {
  for (var i = 0; i <= 100; i++) {
    (function(i) {
      setTimeout(function() {
        imgElement.style.opacity = i / 100;
        if (i == 100) {
          imgElement.style.opacity = 1;
        }
      }, i * 10);
    })(i);
  }
}

function fadeOutBackground(imgElement) {
  for (var i = 0; i <= 100; i++) {
    (function(i) {
      setTimeout(function() {
        imgElement.style.opacity = 1 - i / 100;
        if (i == 100) {
          imgElement.style.opacity = 0;
        }
      }, i * 10);
    })(i);
  }
}

function rotateImages() {
  var imgElement = document.getElementById("image");
  var previousImgElement = document.getElementById("previous-image");

  // Afficher l'image précédente en arrière-plan et la faire disparaître progressivement
  previousImgElement.src = imgElement.src;
  fadeOutBackground(previousImgElement);

  // Faire apparaître la nouvelle image
  currentIndex = (currentIndex + 1) % images.length;
  imgElement.src = images[currentIndex];
  fadeIn(imgElement);
}

setInterval(rotateImages, 3000);
