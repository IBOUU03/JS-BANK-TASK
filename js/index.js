const balanceChange = document.getElementById('menu-bar-balance');
const balanceMenu = document.querySelector('.balance-menu');
const payMe = document.getElementById('menu-bar-pay');
const payMenu = document.querySelector('.pay-menu')
let balanceNum = 1000;
const balanceValue = document.querySelectorAll(".balance");
const userInfo = document.querySelector(".user-info");
const userInfoButton = document.querySelector(".user-info-button")
const payMetod = document.querySelector(".pay-metod");
const addBalance = document.querySelector(".add-balance");
const takeBalance = document.querySelector(".take-balance");
const cartToCart = document.querySelector(".cart-to-cart");
const cartToCartButton = document.querySelector(".cart-to-cart-button");
const payMetodButton = document.querySelectorAll(".pay-metod-button");
const addBalanceButton = document.querySelector(".add-balance-button");
const takeBalanceButton = document.querySelector(".take-balance-button");
const payButton = document.querySelector(".pay-button");

const enterBalance = document.querySelector("#input1");

let checkBalance = Number(enterBalance.value);




sap(balanceChange, balanceMenu);
sap(payMe, payMenu);

balanceValue.forEach(function(element){
  element.innerHTML = balanceNum;
});


payMetodButton.forEach(function(element) {
  changeMenu(element,payMetod);
});
changeMenu(userInfoButton,userInfo);
changeMenu(addBalanceButton,addBalance);
changeMenu(takeBalanceButton,takeBalance);
changeMenu(cartToCartButton,cartToCart);

payButton.addEventListener("click", function(){
  if (checkBalance > 0) {
    if(balanceNum > checkBalance){
      balanceNum -= checkBalance;
    }else{
      alert("Balansda pul yoxdur")
    }
  }else{
    alert("Miqdar daxil edin")
  }
})

function sap(params,param) {
  params.addEventListener('click', function() {
    param.style.display = 'block';
  });
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.menu-bar')) {
      param.style.display = 'none';
    }
  });
}

function displayNone(){
  userInfo.style.display = 'none';
  payMetod.style.display = 'none';
  addBalance.style.display = 'none';
  takeBalance.style.display = 'none';
  cartToCart.style.display = 'none';
}

function changeMenu(param,params){
  param.addEventListener('click', function() {
    displayNone();
    params.style.display = 'block';
  });
}


