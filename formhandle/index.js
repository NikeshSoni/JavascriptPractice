const emailPass = document.querySelector('.emailPass');
const emailData = document.querySelector('.emailData');

function getInputValue(e) {
    if (!emailPass || !emailData) {
        return console.log('all data is compelsoury');
    }else{
        console.log('Working Code');
    }
    if (localStorage.getItem(emailPass) || localStorage.getItem(emailData)) {
        // console.log('are you availble');
        alert('complate login')
        return;
    }else{
        // console.log('you are alredy login');
        alert('you are alredy login')
    }

    const valuseStoreEmail =  localStorage.setItem(emailData.value , 'email');
    const valuseStorePass =  localStorage.setItem(emailPass.value , "password");

    emailData.value = ''
    emailPass.value = ''

    console.log(emailData.value);
    console.log(emailPass.value);
}