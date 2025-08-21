// Helpers
const $ = s => document.querySelector(s);
const box = $('#box');
const input = $('#color-input');

// Apply button logic (refactored)
$('#apply-btn').addEventListener('click', () => {
  box.style.backgroundColor = input.value;
});

// Utility log & short-hex
function log(msg) {
  console.log('[app]', msg);
}

function shortHex(h) {
  return /^#([0-9a-f]{6})$/i.test(h) && h[1] == h[2] && h[3] == h[4] && h[5] == h[6]
    ? '#' + h[1] + h[3] + h[5]
    : h;
}

document.addEventListener('DOMContentLoaded', () => log('ready'));

// Stub validator (можеш да разшириш по-късно)
function validatePickedColor() {
  return true;
}

// Live preview on input change
input.addEventListener('change', function () {
  box.style.backgroundColor = this.value;
});

// Helper + random color generator
function setBox(c) {
  box.style.backgroundColor = c;
}

function randomHex() {
  return '#' + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0');
}

// Random button logic
$('#random-btn').addEventListener('click', () => {
  setBox(randomHex());
});
