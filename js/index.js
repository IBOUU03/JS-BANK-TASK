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
const cartToCart = document.querySelector(".cart-to-cart");
const cartToCartButton = document.querySelector(".cart-to-cart-button");
const payMetodButton = document.querySelectorAll(".pay-metod-button");
const addBalanceButton = document.querySelector(".add-balance-button");
const payButton = document.querySelector(".pay-button");
const addButton = document.querySelector(".add-button");
const cartButton = document.querySelector(".cart-button");
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
changeMenu(cartToCartButton,cartToCart);


payButton.addEventListener("click", function() {
  const enterBalance = document.getElementById("input1").valueAsNumber;
  if (enterBalance > 0 || enterBalance == "") {
    if (enterBalance < balanceNum) {
      balanceNum -= enterBalance;
      balanceValue.forEach(function(item) {
        item.textContent = balanceNum;
      });
    }else{
      alert("Balansdca kifayət qədər pul yoxdur")
    }
  }else{
    alert("Duzgun reqem daxil edin")
  }
});

addButton.addEventListener("click", function() {
  
  const enterBalance = document.getElementById("input2").valueAsNumber;
  if (enterBalance > 0 || enterBalance == "") {
      balanceNum += enterBalance;
      balanceValue.forEach(function(item) {
        item.textContent = balanceNum;
      });
  }else{
    alert("Duzgun reqem daxil edin")
  }
});

cartButton.addEventListener("click", function() {
  const enterBalance = document.getElementById("input3").valueAsNumber;
  var cardNumber = document.getElementById("card-number").value;
  if (cardNumber.length == 16 ) {
    if (enterBalance > 0 || enterBalance == "") {
      if (enterBalance < balanceNum) {
        balanceNum -= enterBalance;
        balanceValue.forEach(function(item) {
          item.textContent = balanceNum;
        });
      }else{
        alert("Balansdca kifayət qədər pul yoxdur")
      }
    }else{
      alert("Duzgun reqem daxil edin")
    }
  }else{
    alert("Kart kodunu duzgun daxil edin")
  }  
});


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
  cartToCart.style.display = 'none';
}


function changeMenu(param,params){
  param.addEventListener('click', function() {
    displayNone();
    params.style.display = 'block';
  });
}


