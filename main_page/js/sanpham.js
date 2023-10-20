

function getListProducts() {
    return JSON.parse(localStorage.getItem("list_product"));
}

function newLi(product,chitietSp) {
    // var chitietSp = 'chitietsanpham.html?' + product.name.split(' ').join('-');
    document.write(`<li><a href="`+ chitietSp + `">
                            <img src=` + JSON.stringify(product.img) + `">
                            <p id="tensp"> `+ product.tensp + `</p>
                            <p id="soluong">Số Lượng: `+ product.soluong + `</p>
                            <p id="gia">Giá: `+ product.gia + `</p>
                            <button id=buy>Xem</button>
                        </a></li>`)
}

function Products(masp, img, tensp, soluong, gia, thongtin){
    this.masp = masp;
    this.img = img;
    this.tensp = tensp;
    this.soluong = soluong;
    this.gia = gia;
    this.thongtin = thongtin;
}

