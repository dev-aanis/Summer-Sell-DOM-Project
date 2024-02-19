const cards = document.querySelectorAll(".card");
let count = 1;
let totalPrice = 0;
for(let i = 0; i<cards.length; i++){
    cards[i].addEventListener('click',function(){
        const title = cards[i].querySelector('h3').innerText;
        const convertedPrice = cards[i].querySelector('span').innerText.split(" ")[1];
        const price = parseFloat(convertedPrice);
        const titleContainer = document.getElementById('title-container');
        const p = document.createElement('p');
        p.innerText=`${count}. ${title}`;
        titleContainer.appendChild(p);
        count++
        const updatePrice = document.getElementById('totalPrice');
        totalPrice =totalPrice+price;
        updatePrice.innerText=totalPrice;
        const grandTotal = document.getElementById('total');
        grandTotal.innerText=totalPrice;
    })
}
const applyBtn = document.getElementById('apply-btn');
applyBtn.addEventListener('click',function(){
    const couponElement = document.getElementById('input-field').value.split(" ").join('');
    const couponText = couponElement.toUpperCase();
    if(totalPrice>=200){
        if(couponText==='SELL200'){
            const discountPrice = document.getElementById('discountPrice');
            const grandTotal = document.getElementById('total');
            const  discount = totalPrice*20/100;
            discountPrice.innerText = discount;
            const total = totalPrice-discount;
            grandTotal.innerText= total;
            document.getElementById('input-field').value = '';
        }else{
            alert('Invalid Coupon Applied')
            document.getElementById('input-field').value = '';
        }
    }else{
        alert('purchase more or equal $200')
        document.getElementById('input-field').value = '';
    }
})