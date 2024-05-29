let tanya = true;
while (tanya) {
  // Menangkap pilihan player
  let p = prompt('Pilih : gajah, semut, orang');

  // Menangkap pilihan komputer
  // Membangkitkan bilangan random
  let comp = Math.round(Math.random(p));

  if (comp < 0) {
    comp = 'gajah';
  } else if (comp >= 0 && comp < 1) {
    comp = 'orang';
  } else {
    comp = 'semut';
  }

  let hasil = '';

  // Menentukan rules
  if (p == comp) {
    hasil = 'SERI !';
  } else if (p == 'gajah') {
    hasil = comp == 'orang' ? 'MENANG !!!' : 'KALAH !!!';
  } else if (p == 'orang') {
    hasil = comp == 'gajah' ? 'KALAH !!!' : 'MENANG !!!';
  } else if (p == 'semut') {
    hasil = comp == 'orang' ? 'KALAH !!!' : 'MENANG !!!';
  } else {
    hasil = 'pilihan tidak valid !!!';
  }
  // tampilkan hasilnya
  alert(`Kamu memilih ${p}, dan komputer memilih : ${comp} \nMaka hasilnya : ${hasil}`);

  tanya = confirm('Lagi ?');
}

alert('Terimakasih sudah bermain . . .');
