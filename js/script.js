const seats = document.getElementsByClassName('seats');
let count = 0;
function set(event) {
    count = count + 1;
    htext('seat-count', count);

    const tSeat = document.getElementById('total-seats');
    const totalSeatText = tSeat.innerText;
    const lSeat = parseInt(totalSeatText);
    const remainingSeat = lSeat - 1;
    htext('total-seats', remainingSeat);


    const seatName = this.innerText;
    spSection(seatName);

    const seatPriceText = document.getElementById('seat-price').innerText;
    const seatPrice = parseFloat(seatPriceText);
    const totalTicketPrice = count * seatPrice;
    htext('total-price', totalTicketPrice);
    htext('grand-total', totalTicketPrice);
    if (count <= 4) {
        this.classList.add('bg-[#1dd100]');

    }
    if (count === 4) {
        for (const seat of seats) {
            seat.removeEventListener('click', set)
        }
    }
}
for (const seat of seats) {
    seat.addEventListener('click', set);
}


const couponBtn = document.getElementById('apply-btn');
couponBtn.addEventListener('click', function () {
    const input = document.getElementById('input-field');
    const inputValue = input.value;
    let discountAmount = 2200;
    if (count === 4) {
        if (inputValue === 'NEW15') {
            let discountPrice = discountAmount - (discountAmount * 0.85)
            htext('grand-total', discountPrice);
            const discountContainer = document.getElementById('priceDiscountContainer');
            const fH1 = document.createElement('h1');
            fH1.textContent('Discount Price');
            const sH1 = document.createElement('h1');
            sH1.textContent('BDT 330');
            discountContainer.appendChild(fH1);
            discountContainer.appendChild(sH1);

            const labelHide = document.getElementById('label-hide');
            labelHide.classList.add('hidden');
            

        } else if (inputValue === 'COUPLE20') {
            let discountPrice = discountAmount - (discountAmount * 0.8);
            htext('grand-total', discountPrice);
            const discountContainer = document.getElementById('priceDiscountContainer');
            const fH1 = document.createElement('h1');
            fH1.textContent('Discount Price');
            const sH1 = document.createElement('h1');
            sH1.textContent('BDT 440');
            discountContainer.appendChild(fH1);
            discountContainer.appendChild(sH1);

            const labelHide = document.getElementById('label-hide');
            labelHide.classList.add('hidden');
        }
        else{
            alert('Please Input a valid coupon')
        }
        
    } else{
        alert('Please At last buy 4 tickets')
            
    }
})

function formSubmit(e) {
    e.preventDefault();
  
    let name = document.getElementById('name');
    let nameValue = name.value;
    let number = document.getElementById("phone-number");
    let numberValue = number.value;
    let email = document.getElementById("email");
    let emailValue = email.value;
    let value = elementValue("seat-count");
  
    if (numberValue.length == 11 && numberValue > 0 && value > 0 && nameValue !== "" &&  emailValue !== "") {
      modal.showModal()
      let inputs = document.querySelectorAll("input");
      inputs.forEach(function(input) {
        input.value = '';
      });
    } else {
      alert("Please fill in all required fields.");
    }
  }