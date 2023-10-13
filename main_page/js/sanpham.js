

function getListProducts() {
    return JSON.parse(localStorage.getItem("list_product"));
}

function newLi(product) {
    document.write(`<li> 
                            <img src=` + JSON.stringify(product.img) + `">
                            <p id="tensp"> `+ product.tensp + `</p>
                            <p id="soluong">Số Lượng: `+ product.soluong + `</p>
                            <p id="gia">Giá: `+ product.gia + `</p>
                            <button id=buy>Mua</button>
                        </li>`)
}

function Products(masp, img, tensp, soluong, gia, thongtin) {
    this.masp = masp;
    this.img = img;
    this.tensp = tensp;
    this.soluong = soluong;
    this.gia = gia;
    this.thongtin = thongtin;
}

