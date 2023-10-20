var nameProduct
// var nameProduct = window.location.href.split('?')[1];
// nameProduct = nameProduct.split('-').join(' ');


function newDiv(product) {
    // nameProduct = window.location.href.split('?')[1];
    // nameProduct = nameProduct.split('-').join(' ');
    // document.title = nameProduct + ' - M.O.Y Store';
    document.write(`<div class="product-contain">
    <img src=`+ JSON.stringify(product.img) + `>
    <ul>
        <li id="product-name">`+ product.tensp + `</li>
        <ol>
            <li id="product-size">Size:<input placeholder="S | M | L..."></li>
            <li id="product-quantity">Số lượng: <input type="number" id="quantity" name="quantity" min="1"
                    value="1" onclick="SoLuong()"><button onclick="SoLuong()">OK</button></li>
        </ol>

        <li id="product-price"><strong>Giá: </strong><p id="price" style="display:inline">` + product.gia + `</p></li>
    </ul>
</div>`
    )
}

// =========================tính giá==================

var soluong
var tonggia
function SoLuong(){
    soluong = document.getElementById("quantity").value
    var price = document.getElementById("price").innerText

    var hienSoLuong = document.getElementById("soluong")
    hienSoLuong.innerHTML = soluong

    var sum = price * soluong
    document.getElementById("tamtinh").innerHTML = sum+".000"

    tonggia = sum+30
    var tongcong = document.getElementById("sum")
    tongcong.innerHTML = tonggia+".000"
}

//===========================thanh toán================

function getListComments() {
    return JSON.parse(localStorage.getItem("list_info"));
}
var list_info = getListComments()
function information(ho, ten, gmail, thanhpho, quan_huyen, phuong_xa, so_nha,tonggia) {
    this.ho = ho
    this.ten = ten
    this.gmail = gmail
    this.thanhpho= thanhpho
    this.quan_huyen = quan_huyen
    this.phuong_xa = phuong_xa
    this.so_nha = so_nha
    this.tonggia = tonggia
}

function getInfo(form) {
    var ho = form.ho.value;
    var ten = form.ten.value;
    var gmail = form.gmail.value;
    var thanhpho = form.thanhpho.value;
    var quan_huyen = form.quan_huyen.value
    var phuong_xa = form.phuong_xa.value
    var so_nha = form.so_nha.value
    var newInfo = new information(ho, ten, gmail, thanhpho, quan_huyen, phuong_xa, so_nha,tonggia)
    
    list_info.push(newInfo);
    localStorage.setItem("list_info",JSON.stringify(list_info))
    var thongbao = "Thông tin đã gửi đi thành công, cảm ơn bạn đã mua hàng ở M.O.Y Store.";
    alert(thongbao)

    var elements = document.getElementsByClassName("chuyen-khoan");
for (var i = 0; i < elements.length; i++) {
  elements[i].style.display = "block";
}
    location.reload()

}

