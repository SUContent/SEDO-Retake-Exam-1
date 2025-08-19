// events.js
import { getRandomColor } from './utils.js';

export function bindEvents() {
  document.getElementById('apply-btn').addEventListener('click', () => {
    const c = document.getElementById('color-input').value;
    document.getElementById('box').style.backgroundColor = c;
  });

  document.getElementById('randomColorBtn').addEventListener('click', () => {
    const randomColor = getRandomColor();
    document.getElementById('box').style.backgroundColor = randomColor;
  });
}
