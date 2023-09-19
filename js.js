let root;
let wSlider;
let hSlider;
window.onload = () => {
    root = document.querySelector(":root");
    wSlider = document.getElementById("widthSlider");
    hSlider = document.getElementById("heightSlider");
}

function valt() {
    root.style.setProperty("--box-width",wSlider.value + "px");
    root.style.setProperty("--box-height",hSlider.value + "px");
}

