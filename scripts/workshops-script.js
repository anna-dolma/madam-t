var table1 = document.getElementById("mit-set");
var table2 = document.getElementById("ohne-set");

function hidetable(id) {
    table2.style.display = (id === "ohne-set") ? "block" : 'none';
    table1.style.display = (id === "mit-set") ? "block" : 'none';
}

let imageNr = 1;
showImage(imageNr);

// Next/previous controls
function forward(n) {
    showImage(imageNr += n);
}

// Thumbnail image controls
function currentImage(n) {
    showImage(imageNr = n);
}

function showImage(n) {
    let i;
    let images = document.getElementsByClassName("gallery-image");
    let previews = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > images.length) {imageNr = 1}
    if (n < 1) {imageNr = images.length}
    for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    for (i = 0; i < previews.length; i++) {
        previews[i].className = previews[i].className.replace(" active", "");
    }
    images[imageNr-1].style.display = "block";
    previews[imageNr-1].className += " active";
    captionText.innerHTML = previews[imageNr-1].alt;
}