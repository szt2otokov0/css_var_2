let root;
let oldColor;
let colorpick;
let numberpick;
window.onload = () => {
    root = document.querySelector(":root");
    oldColor = getComputedStyle(root).getPropertyValue("--bg-root");
    picker = document.getElementById("colorpicker");
    numberpick = document.getElementById("numberpicker");
    console.log(oldColor);
    picker.value = oldColor;
}

function valt() {
    let x = parseInt(numberpick.value);
    if(x < 1 || x > 8) {
        alert("nincs ilyen téglalap");
        return;
    }
    root.style.setProperty(`--b${x}`,picker.value)
}

