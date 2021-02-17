
var colorHex = "";

//changes the wallpaper's background color
function changeBg() {


    var r = parseInt(document.getElementById("red").value); //Red
    var g = parseInt(document.getElementById("green").value); //Green
    var b = parseInt(document.getElementById("blue").value); // Blue
    var a = parseInt(document.getElementById("alpha").value); // Alpha

    //Alpha
    a = calcApha(a);


    //Get the hex value of red,green and blue colors
    var hex = "#" + getHex(r) + getHex(g) + getHex(b) + a;

    //change the body background to the hex value
    document.body.style.background = hex;

    //Update the hex global variable
    colorHex = hex;

    //Update the copy text value
    document.getElementById('hex').value = `Hex:${hex}`;
    //for debugging
    console.log(hex);

}

//gets the hex value of a number, recieves a number
function getHex(c) {

    var hex = c.toString(16);
    if (c < 16) {

        hex = "0" + c;
    }
    return hex;
}

function calcApha(a) {
    a = Math.floor(a / 255 * 100)
    if (a < 10) {
        a = "0" + a;
    }

    if (a > 99) {
        a = "";
    }

    return a;
}


function shuffle_rgb() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    var a = Math.floor(Math.random() * 255);
    var new_Hex = "#" + getHex(r) + getHex(g) + getHex(b) + calcApha(a);
    document.body.style.background = new_Hex;
    //update the color sliders
    document.getElementById("red").value = r; //Red
    document.getElementById("green").value = g; //green
    document.getElementById("blue").value = b; //blue
    document.getElementById("alpha").value = a; //alpha
    //Update the copy text value
    document.getElementById('hex').value = `Hex:${new_Hex}`;
    //update the hex global variable
    colorHex = new_Hex;
}

var dice = document.getElementById('dice');
dice.addEventListener('click', function () {
    //shuffle the colors
    shuffle_rgb();
})

//Copies hex val to clipboard
document.getElementById('copy-icon').addEventListener('click', function () {
    var text = document.getElementById('hex');
    text.select();
    text.setSelectionRange(0, 99999);
    document.execCommand("copy");

    var tooltip = document.getElementById("mytoolTip");
    tooltip.innerHTML = "Copied!";
})

function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
}

//init 
function initialise() {
    shuffle_rgb();
}
