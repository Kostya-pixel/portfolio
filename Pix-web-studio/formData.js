const userName = document.getElementById('name');
const ucerTel = document.getElementById('tel');
const btnSubmit = document.getElementById('sub');



btnSubmit.onclick =  function (){
    let data = {
        name : userName.value,
        tel : ucerTel.value,
    }
        userName.value = '';
        ucerTel.value = '';
        modalConsult.style.display = 'none';
       
}



