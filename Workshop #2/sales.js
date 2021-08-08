const couponSale = ["Junior", "SemiSenior", "Senior"];

function calculatePriceWithSale(price, coupon) {
    const pricePercentWithSale = 100 - coupon;
    const priceWithSale = (price * pricePercentWithSale) /100;

    return priceWithSale;
}

function priceSale(){
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

    const priceWithSale = calculatePriceWithSale(priceValue, discount);

    const resultP = document.getElementById("resultPrice");
    resultP.innerText = "The price with sale is: $" +priceWithSale;
}
