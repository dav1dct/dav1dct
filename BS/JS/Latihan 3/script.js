let inputnama = document.getElementById("nama");
let inputtestimoni = document.getElementById("testimoni");
let btnSimpan = document.getElementById("btnSimpan");
let list = document.getElementById("list");

let data = [];
btnSimpan.addEventListener("click",function () {
    if (localStorage.getItem("testimoni")){
        data = JSON.parse(localStorage.getItem("testimoni"));
        data.push({
        nama: inputnama.value,
        testimoni: inputtestimoni.value,
    }); 
 } else {
        data.push({
        nama: inputnama.value,
        testimoni: inputtestimoni.value,
        });
    }
    localStorage.setItem("testimoni", JSON.stringify(data));
    //panggil getData()
    getData();
});

// tampilkan data localStorage dengan key testimoni
function getData(){
    //clear list
    list.innerHTML = "";
    if (localStorage.getItem("testimoni")){
        data = JSON.parse(localStorage.getItem("testimoni"));
        for(const[index,row] of data.entries()){
            list.innerHTML += `<li>${row.nama} ${row.testimoni}</ li>`;
        }
    }
}
getData();

// tampilkan data localStorage dengan key testimoni
function getData() {
    //clear list and tabelBody
    list.innerHTML = "";
    const tabelBody = document.getElementById("tabelBody");
    tabelBody.innerHTML = "";

    if (localStorage.getItem("testimoni")) {
        data = JSON.parse(localStorage.getItem("testimoni"));
        for (const [index, row] of data.entries()) {
            // Tambahkan data ke dalam list
            list.innerHTML += `<li>${row.nama}: ${row.testimoni}</li>`;

            // Tambahkan data ke dalam tabel
            const newRow = document.createElement("tr");
            newRow.innerHTML = `
                <td>${row.nama}</td>
                <td>${row.testimoni}</td>
            `;
            tabelBody.appendChild(newRow);
        }
    }
}

getData();