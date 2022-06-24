
const container = document.querySelector('.container');
const sizeEle = document.querySelector('.rangeslider');
const color = document.querySelector('.color');
const resetBtn = document.querySelector('.button');
let draw = false;

let rangeslider = document.getElementById('sliderRange');
let output = document.getElementById('value');
output.innerHTML = rangeslider.value;

rangeslider.oninput = function () {
  output.innerHTML = this.value;
};

let size = rangeslider.value;

function addGrid() {
  container.style.setProperty('--size', size);
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement('div');
    div.classList.add('box');
    div.addEventListener('mouseover', () => onMouseOver(div));
    div.addEventListener('mousedown', () => onMouseDown(div));

    container.appendChild(div);
  }
}

addGrid();

function onMouseOver(div) {
  if (!draw) return;
  div.style.backgroundColor = color.value;
}

function onMouseDown(div) {
  div.style.backgroundColor = color.value;
}

window.addEventListener('mousedown', function () {
  draw = true;
});

window.addEventListener('mouseup', function () {
  draw = false;
});

function reset() {
  container.innerHTML = '';
  addGrid();
}

resetBtn.addEventListener('click', reset);

sizeEle.addEventListener('click', function () {
  size = rangeslider.value;
  reset();
});
