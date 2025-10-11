

function unfold() {
    var elements = document.getElementsByClassName("footer");
    var i;

    for (i = 0; i < elements.length; i++) {
        elements[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
}