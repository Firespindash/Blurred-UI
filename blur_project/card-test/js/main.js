// DOM Elements
const morning = document.getElementById('period1'),
  afternoon = document.getElementById('period2'),
  night = document.getElementById('period3');

// Add Events
morning.addEventListener('click', function(){
  document.body.style.backgroundImage = "url('img/morning.jpg')";
})

afternoon.addEventListener('click', function(){
  document.body.style.backgroundImage = "url('img/afternoon.jpg')";
})

night.addEventListener('click', function(){
  document.body.style.backgroundImage = "url('img/night.jpg')";
})

// Set Background
function setBg() {
  document.body.style.backgroundImage = "url('img/morning.jpg')";
}

// Fixing Background
function FixBackgroundToScreen() {
    bgImg = new Image();
    bgImg.src = document.body.background;

    if ((bgImg.height / window.innerHeight) < (bgImg.width / window.innerWidth))
        document.body.style.backgroundSize = "auto 100%";
    else
        document.body.style.backgroundSize = "100% auto";
}

// Run
setBg();
FixBackgroundToScreen();
