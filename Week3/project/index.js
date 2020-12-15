// Your code goes in here
// Tip Calculator
function calculateTip() {

let billAmt = document.getElementById("billamt").value;
let serviceQual = document.getElementById("serviceQual").value;
let howManyPeople = document.getElementById("people").value;


let total = (billAmt * serviceQual) / howManyPeople;
total = Math.round(total * 100) / 100;
total = total.toFixed(2);

if (billAmt === "" || serviceQual == 0) {
    alert("You need to fill in all the fields!");
    return;
  }

  if (howManyPeople === "" || howManyPeople <= 1) {
    howManyPeople = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

document.getElementById("tip").innerHTML = total;

}


document.getElementById("calculate").addEventListener("click", calculateTip);
  
  


