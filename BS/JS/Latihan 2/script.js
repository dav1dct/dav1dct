let data = ["Kiana",'Mei','Bronya'];
let listMhs = document.getElementById("listMhs");
data.forEach(showMahasiswa);

function showMahasiswa(value, index)
{
    console.log(value);
    listMhs.innerHTML += "<li>"+ value +"</li>";
}

let npm = document.getElementById("npm");
// tampilkan data localStorage ke dalam elemen <p id='npm'>
npm.innerHTML = localStorage.getItem("npm");

let nama = document.getElementById("nama");
nama.innerHTML = localStorage.getItem("nama");

// simpan data ke localStorage
localStorage.setItem("email","bronyazaychik@mihoyo.com");
// data array
let hobi = ["baca","game","code"];
localStorage.setItem("hobi", hobi);
localStorage.setItem("myhobi", JSON.stringify(hobi));

//  data object
let mhs = {npm: 2226240002,nama: "Himeko"};
// cara akses
console.log(mhs.npm);
console.log(mhs.nama);

// Kombinasi array dan object
let nilai = [
    { kode_mk: "SI0001", nama_mk: "Pemrogaman Web"},
    { kode_mk: "SI0002", nama_mk: "PAB"},
];
// simpan nilai ke json
localStorage.setItem("nilai", JSON.stringify(nilai))
// tampilkan nama_mk Pemrogaman Web
console.log(nilai[0].nama_mk);
console.log(nilai[1].nama_mk);

// tampilkan menggunakan for atau forEach
let lsNilai = localStorage=JSON.parse(localStorage.getItem("nilai"))
for (const [index, data] of lsNilai.entries()) {
    console.log(data.kode_mk);
    console.log(data.nama_mk);
    // Tampilkan data mk ke dalam <ul id="listmk">
    document.getElementById("listMk").innerHTML += `<li>${data.kode_mk} ${data.nama_mk}</li>`
}


