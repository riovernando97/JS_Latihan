// warna ditentukan
document.getElementById('BtnUbah').addEventListener('click', function () {
  // document.body.style.backgroundColor = 'lightblue';
  // document.body.setAttribute('class', 'biru-muda');
  // document.body.removeAttribute('class', 'biru-muda');
  document.body.classList.toggle('biru-muda');
});

// button baru
// Warna acak
const BtnRandom = document.createElement('button');
const teksBtn = document.createTextNode('Acak Warna');
BtnRandom.appendChild(teksBtn);
BtnRandom.setAttribute('type', 'button');
BtnUbah.after(BtnRandom);

BtnRandom.addEventListener('click', function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);

  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

// slider warna
const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

sMerah.addEventListener('input', function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = `rgb(${r}, ${g}, 100)`;
});

sHijau.addEventListener('input', function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = `rgb(${r}, ${g}, 100)`;
});

sBiru.addEventListener('input', function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

// Mouse move color
document.body.addEventListener('mousemove', function (event) {
  // posisi mouse
  const xPos = Math.round((event.clientX / window.innerWidth) * 255);
  console.log(xPos);
  const yPos = Math.round((event.clientY / window.innerHeight) * 255);
  document.body.style.backgroundColor = `rgb(${xPos}, ${yPos}, 100)`;
});
