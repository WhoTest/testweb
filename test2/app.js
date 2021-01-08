var data = document.querySelector('input[type="text"]');
var paragraph = document.querySelector('h1');
function showname(){
    paragraph.textContent = data.value;
}