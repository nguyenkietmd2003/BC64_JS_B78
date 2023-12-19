function hienThiMang() {
  let divHienThi = document.getElementById("showMang");
  divHienThi.innerHTML = "Mảng số : " + arrays.join(", ");
}
function tongSoDuong(mang) {
  let tongSoDuong = 0;
  for (let i = 0; i < arrays.length; i++) {
    if (arrays[i] >= 0) {
      tongSoDuong += arrays[i];
    }
  }
  return `Tổng số nguyên dương trong mảng ${tongSoDuong}`;
}
function demSoDuong(mang) {
  let tongSoLuong = 0;
  for (let i = 0; i < arrays.length; i++) {
    if (arrays[i] >= 0) {
      tongSoLuong++;
    }
  }
  return `Số lượng số nguyên dương trong mảng ${tongSoLuong}`;
}
function timSoBeNhat(mang) {
  let min = mang[0];
  for (let i = 0; i < mang.length; i++) {
    if (mang[i] < min) {
      min = mang[i];
    }
  }
  return `Số Nhỏ Nhất Trong Mảng là ${min}`;
}
function timSoDuongNhoNhat(arr) {
  let minSoDuong = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] < minSoDuong) {
      minSoDuong = arr[i];
    }
  }

  if (minSoDuong === Infinity) {
    return "Không có số dương trong mảng";
  }

  return `Số dương nhỏ nhất trong mảng là: ${minSoDuong}`;
}
function timSoChanCuoiCung(arr) {
  let soChanCuoiCung = null;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 2 === 0) {
      soChanCuoiCung = arr[i];
      break;
    }
  }

  return soChanCuoiCung !== null
    ? `Số chẵn cuối cùng trong mảng là: ${soChanCuoiCung}`
    : "Không tìm thấy số chẵn trong mảng";
}
function sapXepTangDan(arr) {
  const mangDaSapXep = arr.slice().sort(function (a, b) {
    return a - b;
  });
  return `Mảng đã sắp xếp theo thứ tự tăng dần: ${mangDaSapXep}`;
}
function doiChoHaiGiaTri(arr, viTri1, viTri2) {
  const newArr = arr.slice();

  if (
    viTri1 < 0 ||
    viTri1 >= newArr.length ||
    viTri2 < 0 ||
    viTri2 >= newArr.length
  ) {
    alert("Vị trí đổi trong mảng không hợp lệ.");
    return newArr;
  }

  let temp = newArr[viTri1];
  newArr[viTri1] = newArr[viTri2];
  newArr[viTri2] = temp;

  return newArr.join(", ");
}
function laSoNguyenTo(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function timSoNguyenToDauTien(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (laSoNguyenTo(arr[i])) {
      return arr[i];
    }
  }
  return "Không có số nguyên tố";
}
function demSoDuongVaSoAm(arr) {
  let soDuong = 0;
  let soAm = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      soDuong++;
    } else if (arr[i] < 0) {
      soAm++;
    }
  }

  if (soDuong > soAm) {
    return "Số lượng số dương nhiều hơn số lượng số âm trong mảng.";
  } else if (soAm > soDuong) {
    return "Số lượng số âm nhiều hơn số lượng số dương trong mảng.";
  } else {
    return "Số lượng số dương và số âm bằng nhau trong mảng.";
  }
}
function timSoNguyenTrongMang(arr) {
  let soNguyen = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Number.isInteger(arr[i])) {
      soNguyen++;
    }
  }

  return `Có ${soNguyen} SỐ Nguyên TRong Mảng`;
}

let arrays = [];
document.getElementById("addInput").onclick = function () {
  var number = document.getElementById("input").value * 1;
  if (number === 0) {
    number === 0;
    arrays.push(number);
    hienThiMang();
  } else {
    if (/^-?\d+$/.test(number)) {
      arrays.push(number);
      console.log(arrays);
      hienThiMang();
    } else {
      alert("Vui lòng nhập lại (Nhập Số)");
    }
  }
};
document.getElementById("addInput1").onclick = function () {
  var soThuc = document.getElementById("input1").value * 1;
  if (/^-?\d*\.?\d+$/.test(soThuc)) {
    arrays.push(soThuc);
    hienThiMang();
  } else {
    alert("Vui lòng nhập số");
  }
};

document.getElementById("cn1").onclick = function () {
  document.getElementById("mangCN1").innerHTML = tongSoDuong(arrays);
};
document.getElementById("cn2").onclick = function () {
  document.getElementById("mangCN2").innerHTML = demSoDuong(arrays);
};
document.getElementById("cn3").onclick = function () {
  document.getElementById("mangCN3").innerHTML = timSoBeNhat(arrays);
};
document.getElementById("cn4").onclick = function () {
  document.getElementById("mangCN4").innerHTML = timSoDuongNhoNhat(arrays);
};
document.getElementById("cn5").onclick = function () {
  document.getElementById("mangCN5").innerHTML = timSoChanCuoiCung(arrays);
};
document.getElementById("cn7").onclick = function () {
  document.getElementById("mangCN7").innerHTML = sapXepTangDan(arrays);
};
document.getElementById("cn6").onclick = function () {
  var vt1 = document.getElementById("vt1").value * 1;
  var vt2 = document.getElementById("vt2").value * 1;
  if (/^-?\d+$/.test(vt1) && /^-?\d+$/.test(vt2)) {
    document.getElementById("mangCN6").innerHTML = doiChoHaiGiaTri(
      arrays,
      vt1,
      vt2
    );
  } else {
    alert("vui lòng nhập số nguyên");
  }
};
document.getElementById("cn8").onclick = function () {
  document.getElementById("mangCN8").innerHTML = timSoNguyenToDauTien(arrays);
};
document.getElementById("cn9").onclick = function () {
  document.getElementById("mangCN9").innerHTML = timSoNguyenTrongMang(arrays);
};
document.getElementById("cn10").onclick = function () {
  document.getElementById("mangCN10").innerHTML = demSoDuongVaSoAm(arrays);
};
