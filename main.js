//1
var btnTinhLuong = document.getElementById("btnTinhLuong");
btnTinhLuong.onclick = function () {
    var luong1Day = document.getElementById("luong1Day").value * 1;
    var dayofWork = document.getElementById("dayofWork").value * 1;

    var result = " Lương= " + luong1Day * dayofWork;


    var footerTinhLuong = document.getElementById("footerTinhLuong");
    footerTinhLuong.innerHTML = result;//xuất ra
};

//2

var btnTinhTB = document.getElementById("btnTinhTB");
btnTinhTB.onclick = function () {
    var number1 = document.getElementById("number1").value * 1;
    var number2 = document.getElementById("number2").value * 1;
    var number3 = document.getElementById("number3").value * 1;
    var number4 = document.getElementById("number4").value * 1;
    var number5 = document.getElementById("number5").value * 1;

    var result2 = number1 + number2 + number3 + number4 + number5;
    var resultTB = " kết quả = " + result2 / 5;


    var footerTinhTB = document.getElementById("footerTinhTB");
    footerTinhTB.innerHTML = resultTB;//xuất ra
};

// 3

var btnChuyenUsd = document.getElementById("btnChuyenUsd");
btnChuyenUsd.onclick = function () {
    var nhapUsd = document.getElementById("nhapUsd").value * 1;


    //Fomart VN
    var VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
      });

    var result3 = "việt nam đồng: " + VND.format(nhapUsd*23500) + " VND</p>";
    document.getElementById("footerChuyenUsd").innerHTML = result3;
    //xuất ra
};





// 4


var btnTinh = document.getElementById("btnTinh");
btnTinh.onclick = function () {
    var chieuDai = document.getElementById("chieuDai").value * 1;
    var chieuRong = document.getElementById("chieuRong").value * 1;

    var dienTich = chieuDai * chieuRong;
    var chuVi = (chieuDai + chieuRong) * 2;

    var result4 = "diện tích:" + dienTich;
    result4 += "chu vi:" + chuVi;
    var footerTinhDTCV = document.getElementById("footerTinhDTCV");
    footerTinhDTCV.innerHTML = result4; //xuất ra
};
// 5

var btnTong2KySo = document.getElementById("btnTong2KySo");
btnTong2KySo.onclick = function () {



    var soHaiky = document.getElementById("soHaiky").value * 1;

    const SoHangDonvi = soHaiky % 10; // lay phan du 5.2 lay 2
    const SoHangChuc = Math.floor(soHaiky / 10);
    var tong2ky = "tongla:" + SoHangDonvi + "+" + SoHangChuc + "=";
    var result5 = tong2ky += SoHangDonvi + SoHangChuc;



    var footerTinhT2KySo = document.getElementById("footerTinhT2KySo");
    footerTinhT2KySo.innerHTML = result5; //xuất ra
};


