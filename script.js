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
const seletor = document.getElementsByClassName('color');
for (let index = 0; index < seletor.length; index += 1) {
  seletor[index].addEventListener('click', changeClass);
}

// função para capturar cores das paletas

// const palletColor1 = document.getElementById('cor1')

// // console.log(bgColor)
// palletColor1.addEventListener("click", e => {
//   let bgColor = window.getComputedStyle(palletColor1, null).getPropertyValue("background-color");
//   console.log(bgColor)
// })

// const palletColor2 = document.getElementById('cor2')

// // console.log(bgColor)
// palletColor2.addEventListener("click", e => {
//   let bgColor = window.getComputedStyle(palletColor2, null).getPropertyValue("background-color");
//   console.log(bgColor)
// })
