function htext(id, value){
    document.getElementById(id).innerText = value;
}
function spSection(seatNumber){
    const seatB = document.getElementById('t-body');
    const tList = document.createElement('tr');

    const seatNum = document.createElement('td');
    const seatClass = document.createElement('td');
    const seatPrice = document.createElement('td');

    seatNum.classList.add('py-4' , 't-Data');
    seatPrice.classList.add('text-right');
    seatNum.innerText = seatNumber;
    seatClass.innerText = 'Economy';
    seatPrice.innerText = '550';

    tList.appendChild(seatNum);
    tList.appendChild(seatClass);
    tList.appendChild(seatPrice);
    seatB.appendChild(tList)

}

function elementValue(elementId){
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const elementValue = parseFloat(elementText);
    return elementValue;
}