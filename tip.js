
// document.querySelector("#tip-form").onchange = 


function atickvai() {

    
let  x = Number(document.querySelector("#totalBill").value)
let range = document.querySelector("#tipInput").value
let precent = document.querySelector("#tipOutput")
let result = document.querySelector("#tipAmount")
let totalresult = document.querySelector("#totalBillWithTip")
let r = document.querySelector("#results")

    
    let hisab = x * (range / 100)

    let finalhisab = x + hisab ;

    result.value = hisab.toFixed(2) ;

    totalresult.value = finalhisab.toFixed(2) ;

    precent.innerHTML = `${range}%`

    r.style.display = "block"

}