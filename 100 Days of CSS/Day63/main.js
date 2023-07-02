const main_box = 
document.querySelector(".main_box");

function createCircle() {
    let circle = 
    document.createElement("div");
    return circle ;
}

for (let i = 0; i < 50; i++) {
    let circle = createCircle();
    circle.style.zIndex = `${i}`;
    circle.style.animation = 
    `scaleandtransform 10s ease-in-out infinite ${
        i / -5
      }s both`;
      main_box.appendChild(circle);
}