const couponDiscount = ["Junior", "SemiSenior", "Senior"];

function calculatePriceWithDiscount(price, coupon) {
    const pricePercentWithDiscount = 100 - coupon;
    const priceWithDiscount = (price * pricePercentWithDiscount) /100;

    return priceWithDiscount;
}

function priceDiscount(){
    const inputP = document.getElementById("inputPrice");
    const inputC = document.getElementById("inputCoupon");
    const priceValue = inputP.value;
    const couponValue = inputC.value;

    let discount;
    
    switch(couponValue){
        case "Junior":
            discount = 15; 
        break;
        case "SemiSenior":
            discount = 30; 
        break;
        case "Senior":
            discount = 45; 
        break;
        default:
            discount = 0;
            alert("The name of the coupon is incorrect!");
    }

    const priceWithDiscount = calculatePriceWithDiscount(priceValue, discount);

    const resultP = document.getElementById("resultPrice");
    resultP.innerText = "The price with discount is: $" +priceWithDiscount;
}
