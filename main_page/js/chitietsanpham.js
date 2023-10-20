var nameProduct
// var nameProduct = window.location.href.split('?')[1];
// nameProduct = nameProduct.split('-').join(' ');


function newDiv(product,chitietSp) {
    // nameProduct = window.location.href.split('?')[1];
    // nameProduct = nameProduct.split('-').join(' ');
    // document.title = nameProduct + ' - M.O.Y Store';
    document.write(`<div class="product-contain">
        <img src=`+ JSON.stringify(product.img) + `>
        <ul>
            <li id="product-name">`+ product.tensp + `</li>
            <li id="product-price"><strong>Giá:</strong> ` + product.gia + `</li>
            <li id="product-detail"> <strong>Thông tin sản phẩm:</strong>
            <ul style="line-height:30px">
            <li><strong>Màu sắc:</strong> `+ product.thongtin.color + `</li>
            <li><strong>Chất liệu:</strong> `+ product.thongtin.material + `</li>
            <li><strong>Size:</strong> `+ product.thongtin.size + `</li>
            <li><strong>Mô tả chi tiết:</strong> <p>- `+ product.thongtin.description.split('.').join('</p><p>-') + `</li>
            </ul>
            </li>
        </ul>
        <button id="buy-btn"><a href="`+chitietSp+`">Mua</a></button>
    </div>`
    )
}

// ================== phần comment=================


function getListComments() {
    return JSON.parse(localStorage.getItem("list_comment"));
}
var list_comment = getListComments()
function Comment(user_name, user_gmail, user_cmt, current_product) {
    this.user_name = user_name
    this.user_gmail = user_gmail
    this.user_cmt = user_cmt
    this.current_product = current_product
}

function getCmt(form) {
    var user_name = form.user_name.value;
    var user_gmail = form.user_gmail.value;
    var user_cmt = form.user_cmt.value;
    var current_product = nameProduct;
    var newCmt = new Comment(user_name, user_gmail, user_cmt, current_product)
    list_comment.push(newCmt);
    localStorage.setItem("list_comment",JSON.stringify(list_comment))


    location.reload();
}

function showCmt(cmt) {
    document.write(`<ul class="khung-binh-luan">
        <li>
            <input style="display:none" type="hidden value="`+cmt.current_product+`">
            <p id="user-name"></p><i class="fa fa-user-circle" style="font-size:24px"></i><strong>`+ cmt.user_name + `</strong></p>
            <p id="hien-binh-luan">`+ cmt.user_cmt + `</p>
        </li>
    </ul>
        `)
}