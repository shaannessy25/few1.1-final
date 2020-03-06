const firstInput = document.getElementById('first-input')
const hColor = document.getElementById('h-color')
const textInput = document.getElementById('text-input')
const pColor = document.getElementById('p-color')
const displayHeader = document.getElementById('display-header')
const displayParagraph = document.getElementById('display-paragraph')


firstInput.addEventListener('change', header);
hColor.addEventListener('change', headerColor);
textInput.addEventListener('change', content);
pColor.addEventListener('change', contentColor)



function header(e) {
    displayHeader.textContent = e.target.value;
}

function content(e) {
    displayParagraph.textContent = e.target.value;
}

function headerColor(e) {
   displayHeader.style.color = e.target.value;
}

function contentColor(e) {
    displayParagraph.style.color = e.target.value;
}