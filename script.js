// Commit 1 – helpers
const $ = s => document.querySelector(s);
const box = $('#box');
const input = $('#color-input');

// Commit 2 – refactor apply using helpers
$('#apply-btn').addEventListener('click', () => {
  box.style.backgroundColor = input.value;
});

// Commit 3 – utility log & short-hex
function log(msg) {
  console.log('[app]', msg);
}

function shortHex(h) {
  return /^#([0-9a-f]{6})$/i.test(h) && h[1] == h[2] && h[3] == h[4] && h[5] == h[6] ?
    '#' + h[1] + h[3] + h[5] : h;
}
document.addEventListener('DOMContentLoaded', () => log('ready'));
// Commit 1 – unchanged apply logic
document.getElementById('apply-btn').addEventListener('click', function () {
  var c = document.getElementById('color-input').value;
  document.getElementById('box').style.backgroundColor = c;
});

// Commit 2 – stub validator
function validatePickedColor() {
  return true;
}

// Commit 3 – live preview on change
document.getElementById('color-input').addEventListener('change', function () {
  document.getElementById('box').style.backgroundColor = this.value;
// Commit 1 – preserve main handler
document.getElementById('apply-btn').addEventListener('click',function(){
  var c=document.getElementById('color-input').value;
  document.getElementById('box').style.backgroundColor=c;
});

// Commit 2 – helper + generator
function setBox(c){document.getElementById('box').style.backgroundColor=c;}
function randomHex(){return'#'+Math.floor(Math.random()*0xffffff).toString(16).padStart(6,'0');}

// Commit 3 – wire random button
document.getElementById('random-btn').addEventListener('click',function(){
  setBox(randomHex());
});