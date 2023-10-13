



function getListProducts(){
        return JSON.parse(localStorage.getItem("list_product"));
    }

var list_products = getListProducts() || list_products;


function Products(masp,img,tensp,soluong,gia){
    this.masp = masp;
    this.img = img;
    this.tensp = tensp;
    this.soluong = soluong;
    this.gia = gia;
}

function newLi(img,tensp,soluong,gia){
    document.write = `<li> 
    <img src=`+ img +` style="width: 100%;">
    <p id="tensp">Tên sản phẩm:`+ tensp +`</p>
    <p id="soluong">Số Lượng: `+ soluong +`</p>
    <p id="gia">Giá: `+ gia + `</p>
    <button id=buy>Mua</button>
</li>`
}

function addProduct(p,ele,returnString){
    var product = new Products(p.masp,p.img ,p.tensp ,p.soluong ,p.gia)
    return addToWeb(product, ele, returnString)
}
function addToWeb(p, ele, returnString){
    var price = `<strong>` + p.gia + `&#8363;</strong>`
    var chitietSp = 'chitietsanpham.html?' + p.tensp.split('.').join('-');
    var newLi = newLi();
    if(returnString) return newLi;
    var products = ele || document.getElementById('products');
	products.innerHTML += newLi;
}