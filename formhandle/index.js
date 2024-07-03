const emailPass = document.querySelector('.emailPass');
const emailData = document.querySelector('.emailData');

function getInputValue(e) {
    if (!emailPass || !emailData) {
        return console.log('all data is compelsoury');
    }else{
        console.log('Working Code');
    }

    const valuseStoreEmail =  localStorage.setItem(emailData.value , 'email');
    const valuseStorePass =  localStorage.setItem(emailPass.value , "password");


    console.log(localStorage.getItem(emailPass));
    if (localStorage.getItem(emailPass) || localStorage.getItem(emailData)) {
        alert('complate login')
    }else{
        // console.log('you are alredy login');
        alert('you are alredy login')
    }

   

    emailData.value = ''
    emailPass.value = ''

    console.log(emailData.value);
    console.log(emailPass.value);
}