document.getElementById('apply-btn').addEventListener('click', function () {
  var c = document.getElementById('color-input').value;
  document.getElementById('box').style.backgroundColor = c;
});

// Stub validator (можеш да разшириш по-късно)
function validatePickedColor() {
  return true;
}

// Live preview on input change
document.getElementById('color-input').addEventListener('change', function () {
  document.getElementById('box').style.backgroundColor = this.value;
});

// Helper + random color generator
function setBox(c) {
  document.getElementById('box').style.backgroundColor = c;
}

function randomHex() {
  return '#' + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0');
}

// Random button logic
document.getElementById('random-btn').addEventListener('click', function () {
  setBox(randomHex());
});