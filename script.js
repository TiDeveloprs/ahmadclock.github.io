let h = document.getElementById("h");
let m = document.getElementById("m");
let s = document.getElementById("s");
let ap = document.getElementById("apm");
let free = document.getElementById("free");
let dot = document.getElementById("dot");
let dote = document.getElementById("dote");
//! name get elemnts
let one = document.getElementById("one");
let tow = document.getElementById("tow");
let three = document.getElementById("three");
let four = document.getElementById("four");
let test = document.getElementById("test");
setInterval(function () {
  let date = new Date();
  let hours = date.getHours();
  let sec = date.getSeconds();
  let min = date.getMinutes();
  let apm = "AM";
  if (hours > 11) {
    apm = "PM";
    if (hours > 12) {
      hours -= 12;
    }
  }
  if (sec < 10) {
    sec = "0" + date.getSeconds();
  }
  if (min < 10) {
    min = "0" + date.getMinutes();
  }
  h.innerHTML = hours;
  m.innerHTML = min;
  s.innerHTML = sec;
  ap.innerHTML = apm;
}, 1000);
setInterval(function () {
  let co = Math.floor(Math.random() * 19685796).toString(16);
  let clo = Math.floor(Math.random() * 19685796).toString(16);
  console.log(co);
  s.style.color = "#" + co;
  ap.style.color = "#" + clo;
}, 1000);
setInterval(function () {
  let cor = Math.floor(Math.random() * 19685796).toString(16);
  free.style.color = "#" + cor;
}, 100);
setInterval(function () {
  let coi = Math.floor(Math.random() * 19685796).toString(16);
  m.style.color = "#" + coi;
}, 60000);
setInterval(function () {
  let core = Math.floor(Math.random() * 19685796).toString(16);
  h.style.color = "#" + core;
}, 60000);
//! dobble dost aria prohabite aria
setInterval(function () {
  let dottt = Math.floor(Math.random() * 19685796).toString(16);
  dot.style.color = "#" + dottt;
}, 50);
setInterval(function () {
  let dottt3 = Math.floor(Math.random() * 19685796).toString(16);
  dote.style.color = "#" + dottt3;
}, 50);

setInterval(function () {
  let one3 = Math.floor(Math.random() * 19685796).toString(16);
  one.style.color = "#" + one3;
  test.style.borderColor = "#" + one3;
  tow.style.color = "#" + one3;
  three.style.color = "#" + one3;
  four.style.color = "#" + one3;
}, 2000);
