let angka = document.getElementById('angka');
let angka2 = document.getElementById('angka2');
let hasil = document.getElementById('hasil');

function hitung(operator) {
    if (operator == "tambah") {
        hasil.innerHTML = Number(angka.value) + Number(angka2.value);
    } else if (operator == "kurang") {
        hasil.innerHTML = Number(angka.value) - Number(angka2.value);
    } else if (operator == "kali") {
        hasil.innerHTML = Number(angka.value) * Number(angka2.value);
    } else if (operator == "bagi") {
        hasil.innerHTML = Number(angka.value) / Number(angka2.value);
    }
}