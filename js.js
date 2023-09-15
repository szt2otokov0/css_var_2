let root;
let oldColor;
let picker;
window.onload = () => {
    root = document.querySelector(":root");
    oldColor = getComputedStyle(root).getPropertyValue("--bg-root");
    picker = document.getElementById("colorpicker");
    console.log(oldColor);
    picker.value = oldColor;
}

function valt() {
    root.style.setProperty("--bg-root",picker.value)
}

