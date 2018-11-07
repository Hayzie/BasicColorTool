
var selectedColor = "color_1";
var colorHex = "";

//changes the wallpaper's background color
function changeBg() {

    //show the rgb label
    document.getElementById('rgb-hex').style.display = "block";

    //hide the gradient label
    document.getElementById('gradient-hex-1').style.display = "none";
    document.getElementById('gradient-hex-2').style.display = "none";

    var r = parseInt(document.getElementById("red").value);
    var g = parseInt(document.getElementById("green").value);
    var b = parseInt(document.getElementById("blue").value);

    var hex = "#" + getHex(r) + getHex(g) + getHex(b);
    drawImage(hex);
    document.getElementById('hex_color').innerHTML = hex;
    colorHex = hex;

    document.getElementById('copyText').value = hex;
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

//draw an images, recieves color
function drawImage(color) {

    var c = document.getElementById('canvas');
    var ctx = c.getContext('2d');
    var w = canvas.width;
    var h = canvas.height;

    ctx.fillStyle = color;
    ctx.fillRect(0, 0, w, h);


}


function changeGradient() {

    //hide the rgb label
    document.getElementById('rgb-hex').style.display = "none";
    //show the gradient label
    document.getElementById('gradient-hex-1').style.display = "block";
    document.getElementById('gradient-hex-2').style.display = "block";

    var r = parseInt(document.getElementById("red_small").value);
    var g = parseInt(document.getElementById("green_small").value);
    var b = parseInt(document.getElementById("blue_small").value);


    var hex = "#" + getHex(r) + getHex(g) + getHex(b);
    document.getElementById(selectedColor).style.backgroundColor = hex;
  
    //update the labels
    if(selectedColor=="color_1"){

        document.getElementById('hex_color_1').innerHTML=hex;

    }else if(selectedColor=="color_2"){

        document.getElementById('hex_color_2').innerHTML=hex;
    }

    
    document.getElementById('copyText').value = hex;
    gradient();
    console.log(hex);

}


function gradient() {

    var color_1 = document.getElementById('color_1').style.backgroundColor; //first color
    var color_2 = document.getElementById('color_2').style.backgroundColor; //sencond color
    var x = document.getElementById('grdientX-pos-slider').value; //slider value
    
    var c = document.getElementById('canvas'); 
    var ctx = c.getContext('2d');
    var w = canvas.width; //canvas width
    var h = canvas.height; //canvas height
    var startX = x/100*w;  //calulate the percentage
    g = ctx.createLinearGradient(0, 0, startX, 0);

    g.addColorStop(0, color_1);
    g.addColorStop(1, color_2);

    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);

    var perc = startX/w*100; // get percentage
    //update the percentage
    document.getElementById('gradient-pos-percentage').innerHTML = perc.toFixed(0)+"%";

    console.log(w);

}


function switchColor(id) {

    //determine with gradient color is selected
    if (id == "color_1") {

        selectedColor = "color_1"; //update selected color
        document.getElementById('color_1').style.border = "2px solid cornflowerblue"
        document.getElementById('color_2').style.border = "2px solid lightgrey"

    }

    if (id == "color_2") {
        selectedColor = "color_2";
        document.getElementById('color_2').style.border = "2px solid cornflowerblue"
        document.getElementById('color_1').style.border = "2px solid lightgrey"
    }

}

//init 
function initialise() {
    document.getElementById('color_1').style.backgroundColor = "#e66465";
    document.getElementById('color_2').style.backgroundColor = "#9198e5";
    document.getElementById('rgb-hex').style.display = "none";
    document.getElementById('gradient-hex-1').style.display = "none";
    document.getElementById('gradient-hex-2').style.display = "none";
    document.getElementById('hex_color_1').innerHTML = "#e66465";
    document.getElementById('hex_color_2').innerHTML = "#9198e5";
}


//copies hex values to clipboard
function copyToclipBoard(id) {


    var text = document.getElementById(id).innerText;
    var textElement = document.getElementById('copyText')
    textElement.style.display = "block";
    textElement.value = text;
    textElement.select();
    document.execCommand("copy");
    textElement.style.display = "none";
    console.log(id);
    console.log(text);

}