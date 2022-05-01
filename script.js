// cria função que adciona 5 seções e 5 divs en cada
function addSection() {
  const pixelBoard = document.getElementById('pixel-board');
  for (let i = 0; i < 5; i += 1) {
    const newSection = document.createElement('section');
    newSection.className = 'limit';
    pixelBoard.appendChild(newSection);
    for (let j = 0; j < 5; j += 1) {
      const newDiv = document.createElement('div');
      newDiv.className = 'pixel';
      newSection.appendChild(newDiv);
    }
  }
}
addSection();

function changeClass(e) {
  // acessar classe color selected
  const findSelected = document.querySelector('.selected');
  // remove selected
  findSelected.classList.remove('selected');
  // adcionar selected ao clicado
  e.target.classList.add('selected');
  console.log(e)
}
const selector = document.getElementsByClassName('color');
for (let index = 0; index < selector.length; index += 1) {
  selector[index].addEventListener('click', changeClass);
}

//acessa pixel através da classe
const pixelPaint = document.querySelectorAll(".pixel")
console.log(pixelPaint)
//ao clicar aplica bgColor ao pixel
for (let index = 0; index < pixelPaint.length; index++) {
  pixelPaint[index].addEventListener("click", e => {
    //qual elemento contem selected
    const selectedElemnet = document.querySelector('.selected')
    // qual a cor de fundo
    const bgColor = window.getComputedStyle(selectedElemnet).getPropertyValue('background-color');
    // passar cor para elento clicado
    e.target.style.backgroundColor = bgColor
  })
}