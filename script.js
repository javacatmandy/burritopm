//Alert for username and password length validation
function myAlert()
{
var varify_username = document.forms["form1"]["username"].value;
var varify_password = document.forms["form1"]["password"].value;

if (varify_username == ""){
  alert("Error: username cannot be empty!");
  }
else if(varify_password.length != "9"){
alert("Error: password length must be 9 characters");
  }
else{
  alert("Welcome to Mr Burrito™! Time to choose your burrito, don't forget the voucher code for new users");
  }
}//end of function myAlert

//Mr Burrito Stipulation Alert with using jQuery
function Supersizealert(){
  var chosen = document.forms["form2"]["size"].value;

  if (chosen == "Supersize"){
    $("#demo").show();
  }
else{
    $("#demo").hide();
  }
}

//Calculate TTL cost
function calculateTotal()
{
var dicount_code = document.forms["form2"]["code"].value;
var order_size = document.forms["form2"]["size"].value;
var order_amt = document.forms["form2"]["amount"].value;
var cal_total = 0;


switch (order_size) {

  case "Large":
    cal_total = 7 * order_amt;
    break;
  case "Extra-Large":
    cal_total = 9 * order_amt;
    break;
  case "Supersize":
    cal_total = 17.5 * order_amt;
    break;
  //default:
    //text = "Please choose burrito size";
}//end of switch

  //Validate numeric type of amount & Claculate in condition with or without  discount .
  if(order_amt <= 0 || isNaN(order_amt) == true || (order_amt % 1) != 0){
    alert("Sorry, amount must be a positive integer number!");
  }
else if(dicount_code == "MexTexGood"){
    cal_total = cal_total * 0.9 ;
    document.getElementById("finalorder").innerHTML="Wow! You got the 10% discount! Your order total cost is: " + cal_total;
  }
  else{
    document.getElementById("finalorder").innerHTML="Thanks for ordering! Your order total cost is: " + cal_total;
  }

}//end of function calculateTotal
