// function tombol burger
function tombolBurger() {
    var burgerdiv = document.querySelector(".burger");
    var burgercontainer = document.querySelector(".burger-container")
    var sidenav = document.querySelector(".sidenav");
    var maincontainer = document.querySelector(".main");
    var overlaycontainer = document.querySelector(".overlay");

    burgerdiv.classList.toggle("active");
    burgercontainer.classList.toggle("burger-active");
    sidenav.classList.toggle("sidenav-active");
    maincontainer.classList.toggle("main-active");
    overlaycontainer.classList.toggle("overlay-active");
}

// function buat tombol balik
$(document).ready(function () {
    var angka = 1;
    $("#destination-switch").click(function () {
        if (angka == 1) {
            $("#destination-tujuan1").before($("#destination-tujuan2"));
            $("#destination-tujuan2").after($("#destination-switch"));
            angka = 0;
        } else {
            $("#destination-tujuan1").after($("#destination-tujuan2"));
            $("#destination-tujuan2").before($("#destination-switch"));
            angka = 1;
        }
    });

    var angka2 = 1;
    $("#destination-switchb").click(function () {
        if (angka2 == 1) {
            $("#destination-tujuanb1").before($("#destination-tujuanb2"));
            $("#destination-tujuanb2").after($("#destination-switchb"));
            angka2 = 0;
        } else {
            $("#destination-tujuanb1").after($("#destination-tujuanb2"));
            $("#destination-tujuanb2").before($("#destination-switchb"));
            angka2 = 1;
        }
    });
});

// funtion buat pilihan search
document.querySelector("#searchPesawat").addEventListener("click", function () {
    document.querySelector("#searchPesawat").classList.add("tab__selected");
    document.querySelector("#searchBus").classList.remove("tab__selected");
    document.querySelector("#searchKereta").classList.remove("tab__selected");
    document.querySelector("#searchKapal").classList.remove("tab__selected");
    document.querySelector("#searchTravel").classList.remove("tab__selected");

    document.querySelector(".content-pesawat").style.display = 'block';
    document.querySelector(".content-bus").style.display = 'none';
    document.querySelector(".content-kereta").style.display = 'none';
    document.querySelector(".content-kapal").style.display = 'none';
    document.querySelector(".content-travel").style.display = 'none';

});

document.querySelector("#searchBus").addEventListener("click", function () {
    document.querySelector("#searchBus").classList.add("tab__selected");
    document.querySelector("#searchPesawat").classList.remove("tab__selected");
    document.querySelector("#searchKereta").classList.remove("tab__selected");
    document.querySelector("#searchKapal").classList.remove("tab__selected");
    document.querySelector("#searchTravel").classList.remove("tab__selected");

    document.querySelector(".content-bus").style.display = 'block';
    document.querySelector(".content-pesawat").style.display = 'none';
    document.querySelector(".content-kereta").style.display = 'none';
    document.querySelector(".content-kapal").style.display = 'none';
    document.querySelector(".content-travel").style.display = 'none';
});

document.querySelector("#searchKereta").addEventListener("click", function () {
    document.querySelector("#searchKereta").classList.add("tab__selected");
    document.querySelector("#searchBus").classList.remove("tab__selected");
    document.querySelector("#searchPesawat").classList.remove("tab__selected");
    document.querySelector("#searchKapal").classList.remove("tab__selected");
    document.querySelector("#searchTravel").classList.remove("tab__selected");

    document.querySelector(".content-kereta").style.display = 'block';
    document.querySelector(".content-bus").style.display = 'none';
    document.querySelector(".content-pesawat").style.display = 'none';
    document.querySelector(".content-kapal").style.display = 'none';
    document.querySelector(".content-travel").style.display = 'none';
});

document.querySelector("#searchKapal").addEventListener("click", function () {
    document.querySelector("#searchKapal").classList.add("tab__selected");
    document.querySelector("#searchBus").classList.remove("tab__selected");
    document.querySelector("#searchKereta").classList.remove("tab__selected");
    document.querySelector("#searchPesawat").classList.remove("tab__selected");
    document.querySelector("#searchTravel").classList.remove("tab__selected");
});

document.querySelector("#searchTravel").addEventListener("click", function () {
    document.querySelector("#searchTravel").classList.add("tab__selected");
    document.querySelector("#searchBus").classList.remove("tab__selected");
    document.querySelector("#searchKereta").classList.remove("tab__selected");
    document.querySelector("#searchKapal").classList.remove("tab__selected");
    document.querySelector("#searchPesawat").classList.remove("tab__selected");
});