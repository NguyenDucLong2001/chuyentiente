function convert() {
    var amount = Number(document.getElementById("amount").value);
    var Form_Currency= document.getElementById("chuyendoi1").value;
    var To_currency = document.getElementById("chuyendoi2").value;
    var x = 0;
    if(Form_Currency=="USD" && To_currency=="VND"){
        x = amount*23000 + "VND";
    }
    else{
        if(Form_Currency=="VND" && To_currency=="USD" ){
            x=amount/23000 + "USD";
        }
        else {
            x="Nhập lại"
        }
    }
document.getElementById("result").innerText = x;
}