const p12 = document.getElementById('p12');
const p11 = document.getElementById('p11');
const m11 = document.getElementById('m11');
const m12 = document.getElementById('m12');
var newS1 = document.getElementById('c1');

const p22 = document.getElementById('p22');
const p21 = document.getElementById('p21');
const m21 = document.getElementById('m21');
const m22 = document.getElementById('m22');
var newS2 = document.getElementById('c2');

const p32 = document.getElementById('p32');
const p31 = document.getElementById('p31');
const m31 = document.getElementById('m31');
const m32 = document.getElementById('m32');
var newS3 = document.getElementById('c3');

const p42 = document.getElementById('p42');
const p41 = document.getElementById('p41');
const m41 = document.getElementById('m41');
const m42 = document.getElementById('m42');
var newS4 = document.getElementById('c4');

const p52 = document.getElementById('p52');
const p51 = document.getElementById('p51');
const m51 = document.getElementById('m51');
const m52 = document.getElementById('m52');
var newS5 = document.getElementById('c5');

let s1 = 0;
let s2 = 0;
let s3 = 0;
let s4 = 0;
let s5 = 0;

p12.addEventListener('click', function() {  
  s1 += 2;
  newS1.innerHTML = s1;
});
p11.addEventListener('click', function() {
  s1 += 1;
  newS1.innerHTML = s1;
});
m12.addEventListener('click', function() {
  s1 -= 2;
  newS1.innerHTML = s1;
});
m11.addEventListener('click', function() {
  s1 -= 1;
  newS1.innerHTML = s1;
});

p22.addEventListener('click', function() {
  s2 += 2;
  newS2.innerHTML = s2;
});
p21.addEventListener('click', function() {
  s2 += 1;
  newS2.innerHTML = s2;
});
m22.addEventListener('click', function() {
  s2 -= 2;
  newS2.innerHTML = s2;
});
m21.addEventListener('click', function() {
  s2 -= 1;
  newS2.innerHTML = s2;
});

p32.addEventListener('click', function() {
  s3 += 2;
  newS3.innerHTML = s3;
});
p31.addEventListener('click', function() {
  s3 += 1;
  newS3.innerHTML = s3;
});
m32.addEventListener('click', function() {
  s3 -= 2;
  newS3.innerHTML = s3;
});
m31.addEventListener('click', function() {
  s3 -= 1;
  newS3.innerHTML = s3;
});

p42.addEventListener('click', function() {
  s4 += 2;
  newS4.innerHTML = s4;
});
p41.addEventListener('click', function() {
  s4 += 1;
  newS4.innerHTML = s4;
});
m42.addEventListener('click', function() {
  s4 -= 2;
  newS4.innerHTML = s4;
});
m41.addEventListener('click', function() {
  s4 -= 1;
  newS4.innerHTML = s4;
});

p52.addEventListener('click', function() {
  s5 += 2;
  newS5.innerHTML = s5;
});
p51.addEventListener('click', function() {
  s5 += 1;
  newS5.innerHTML = s5;
});
m52.addEventListener('click', function() {
  s5 -= 2;
  newS5.innerHTML = s5;
});
m51.addEventListener('click', function() {
  s5 -= 1;
  newS5.innerHTML = s5;
});