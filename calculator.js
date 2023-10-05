function tekan(angka) {
  if (n.value == 0) {
    n.value = "";
  }
  n.value += angka;
}

function hapus() {
  n.value = n.value.slice(0, n.value.length - 1);
  if (n.value == 0) {
    n.value = 0;
  }
}

function hasil() {
  n.value = eval(n.value);
}
equal.onclick = hasil;
