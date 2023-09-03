
let total = 0;
function cardBoxClick(prodBox){
    const prodNameInnerText = prodBox.childNodes[3].childNodes[3].innerText;
    const prodName = prodNameInnerText;
    const addProdNameBox = document.getElementById('prod-name-area');
    const createH1Element = document.createElement('h1');
    const count = addProdNameBox.childElementCount;

    if (count >=5){
      const prodId = document.getElementById('prod-name-area');
      prodId.classList.add('h-48','overflow-y-auto');
    }
    createH1Element.classList.add('text-xl','font-semibold', 'pb-2',);
    createH1Element.innerText =`${count + 1}. ${prodName}` ;
    addProdNameBox.appendChild(createH1Element);

    const itemPrice = prodBox.childNodes[3].childNodes[5].childNodes[0].innerText;
    const price = itemPrice;
    total = parseFloat(total) + parseFloat(price);

    setTotalPrice('total-price', total.toFixed(2));
    makePurchaseButton()
    discountCouponButton();

  }
function setTotalPrice(totalPriceId, totalPriceValue){
  document.getElementById(totalPriceId).innerText = totalPriceValue;
}
function makePurchaseButton(){
  const makePurchaseButton = document.getElementById('make-purchase-button');

  if(total>=1){
    makePurchaseButton.disabled = false;
    makePurchaseButton.classList.add('cursor-pointer');
    makePurchaseButton.classList.remove('bg-[#f18ed6]','cursor-not-allowed');
  }else{
    showCouponButton.disabled = true ;
    makePurchaseButton.classList.add('bg-[#f18ed6]','cursor-not-allowed');
    makePurchaseButton.classList.remove('cursor-pointer');
  }
}

function discountCouponButton(){
  const showCouponButton = document.getElementById('showCouponButton');
  const applyCouponButton = document.getElementById('applyCouponButton');
  const couponInputField = document.getElementById('coupon-code');

  if(total>=200){
    showCouponButton.disabled = false;
    applyCouponButton.disabled = false;
    couponInputField.disabled =false
    showCouponButton.classList.add('cursor-pointer');
    showCouponButton.classList.remove('bg-[#f18ed6]','cursor-not-allowed');
    applyCouponButton.classList.add('cursor-pointer');
    applyCouponButton.classList.remove('bg-[#f18ed6]','cursor-not-allowed');
    couponInputField.classList.add('cursor-pointer');
    couponInputField.classList.remove('cursor-not-allowed');
  }else{
    showCouponButton.disabled = true ;
    applyCouponButton.disabled = true ;
    couponInputField.disabled =true
    applyCouponButton.classList.add('bg-[#f18ed6]','cursor-not-allowed');
    applyCouponButton.classList.remove('cursor-pointer');
    showCouponButton.classList.add('bg-[#f18ed6]','cursor-not-allowed');
    showCouponButton.classList.remove('cursor-pointer');
    couponInputField.classList.add('cursor-not-allowed');
    couponInputField.classList.remove('cursor-pointer');
  }
}

function sellCouponCode(){
  const couponCode = document.getElementById('coupon-code').value;
  if(total>=200){
    if (couponCode === 'SELL200'){
      const discountAmount = total.toFixed(2) * 0.2;
      const TotalAmount = total.toFixed(2) - discountAmount;
      setTotalPrice('discount', discountAmount.toFixed(2));
      setTotalPrice('total-amount', TotalAmount.toFixed(2));
    }
    else{
      alert('Invalid coupon try agin');
     }
  }
 else{
  alert('You must have at least 200 TAKA to use the coupon in your cart.')
 }
 return''
}
function addTextInput(){
  if(total>=200){
    const inputElement =document.getElementById('coupon-code')
    const textToAdd ='SELL200'
    inputElement.value = textToAdd;

  }
  else{
    alert('You must have at least 200 TAKA to use the coupon in your cart.')
  }

}

function refreshPage(){
  window.location.reload();
}
makePurchaseButton();
discountCouponButton();