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
