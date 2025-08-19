// Helper for querySelector
const $ = s => document.querySelector(s);
const box = $('#box');
const input = $('#color-input');

// Utility functions
function log(msg) {
  console.log('[app]', msg);
}

function shortHex(h) {
  return /^#([0-9a-f]{6})$/i.test(h) && h[1] === h[2] && h[3] === h[4] && h[5] === h[6] ?
    '#' + h[1] + h[3] + h[5] : h;
}

// Set box color
function setBox(c) {
  box.style.backgroundColor = c;
}

// Random hex generator
function randomHex() {
  return '#' + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0');
}

// Apply button – set box color
$('#apply-btn').addEventListener('click', () => setBox(input.value));

// Random button – apply random color
$('#random-btn').addEventListener('click', () => setBox(randomHex()));

// Live preview when user picks a color
input.addEventListener('change', () => setBox(input.value));

// Validator stub (could be extended later)
function validatePickedColor() {
  return true;
}

// DOM ready
document.addEventListener('DOMContentLoaded', () => log('ready'));
