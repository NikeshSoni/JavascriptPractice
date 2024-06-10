const btn = document.querySelector('.selectBtn');
var store =  document.querySelector('.data');

btn.addEventListener('click', function  data() {
    var number = '0123456789';

    var storeOtp = ''
    for (i = 0; i <= 3; i++) {
        storeOtp = storeOtp + number[Math.floor(Math.random() * 10)]
    }

    store.innerHTML = storeOtp;
})
