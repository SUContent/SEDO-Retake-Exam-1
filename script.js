// Apply button – set box color
document.getElementById('apply-btn').addEventListener('click', function () {
  var c = document.getElementById('color-input').value;
  document.getElementById('box').style.backgroundColor = c;
});

// Validator stub (could be extended later)
function validatePickedColor() {
  return true;
}

// Live preview when user picks a color
document.getElementById('color-input').addEventListener('change', function () {
  document.getElementById('box').style.backgroundColor = this.value;
});

// Helper + random hex generator
function setBox(c) {
  document.getElementById('box').style.backgroundColor = c;
}
function randomHex() {
  return '#' + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0');
}

// Random button – apply random color
document.getElementById('random-btn').addEventListener('click', function () {
  setBox(randomHex());
});
