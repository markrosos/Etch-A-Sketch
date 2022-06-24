// 1. Create web page with 16x16 square of divs using javascript
// float/clear, inline-block, flexbox, or css grid

// 2. Set up "hover" effect so grid divs change color when moused over
// leaving pixelated trail through grid like a pen would
// === Hint: hovering is what happens when your mouse enters a div and
//  ends when mouse leaves div. Set event listeners for either of
//  those events as a starting point

// 3. Multiple ways to change color of divs, including
// === Adding a new class to the div
// === Changing the div's background color using javascript

// 4. Add button to top of screen that will snd user a popup asking
// for the number of squares per side for the new grid. Once
// entered, the existing grid should be removed and a new grid
// generated in the same total space as before (e.g. 960px wide)
// so that you've got a new sketch pad. Tip: Set the limit for the
// user input to a maximum of 100. A larger number of squares
// could lead to too high of resource usage.
// === Research HTML button tags and how to make a javascript
//  function run when one is clicked
// === Also Check out "prompt" (?)
// === You should be able to enter 64 and have brand new 64x64 grid
//  pop up without changing total amount of pixels used

// 5. (Optional): Instead of just changing color of square from
// black to white, have each pass through with mouse change
// it to a random RGB value. Then try having each pass just add
// another 10% of black so that only after 10 passes is the square
// completely black

// 6. Push project

'use strict';

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
