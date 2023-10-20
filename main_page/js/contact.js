function store_info_customer(){
    const hoten = document.getElementById("hoten").value;
    const sdt = document.getElementById("sdt").value;
    const content = document.getElementById("content").value
    if(hoten=="" || sdt==""){
        window.alert("Bạn chưa nhập đủ thông tin!")
    }
    else{
    var customer = new Customer(hoten,sdt,content)
    var customer_value = [customer.hoten,customer.content]
    localStorage.setItem(JSON.stringify(customer.sdt),JSON.stringify(customer_value))
    window.alert("Cảm ơn bạn đã ghé shop! Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất<3")
    }
}


function Customer(hoten,sdt,content){
    this.hoten = hoten;
    this.sdt = sdt;
    this.content = content;
}