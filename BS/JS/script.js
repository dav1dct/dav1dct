document.getElementById("welcome").innerHTML = "Welcome";
document.getElementById("nama").innerHTML = "Blin";
document.getElementById("email").innerHTML = "adada@gmail.com";

let nama = ""
let email = ""
let data = [];

console.log("CONSOLE");

function tampil() {
    console.log("Button ditekan");
    nama = document.getElementById("txtNama").value;
    console.log(nama);
    document.getElementById("nama").innerHTML = nama;
    email = document.getElementById("txtEmail").value;
    console.log(email);
    document.getElementById("email").innerHTML = email;
    data.push(nama);
    console.log(data);
}
