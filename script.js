// cria função que adciona 5 seções e 5 divs en cada
function addSection() {
  let pixelBoard = document.getElementById("pixel-board")
  for (let i = 0; i < 5; i += 1) {
    let newSection = document.createElement('section');
    newSection.className = 'limit';
    pixelBoard.appendChild(newSection);
    for (let j = 0; j < 5; j++) {
      let newDiv = document.createElement('div');
      newDiv.className = "pixel"
      newSection.appendChild(newDiv)
    }
  }
}
addSection()
