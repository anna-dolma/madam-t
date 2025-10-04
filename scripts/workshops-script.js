var table1 = document.getElementById("mit-set");
var table2 = document.getElementById("ohne-set");

function hidetable(id) {
    table2.style.display = (id === "ohne-set") ? "block" : 'none';
    table1.style.display = (id === "mit-set") ? "block" : 'none';
}