let tombol = document.querySelector(".box");
let input = document.querySelector("#input");

tombol.addEventListener("click", function (data) {

    let klik = data.target;
    let nilaiKlik = klik.innerText;

    if (nilaiKlik == "C") {
        input.value = "";
    } else if (nilaiKlik == "Del") {
        input.value = input.value.slice(0, -1);
    } else if (nilaiKlik == "=") {
        input.value = eval(input.value);
    } else {
        input.value = input.value + nilaiKlik;
    }

});

