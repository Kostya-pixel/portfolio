document.querySelector('.send-coment').onclick = () => {
let inp = document.querySelector('.init-coment').value;
let arrinput = [];
arrinput.push(inp);
document.querySelector('.coments').innerHTML += arrinput + '<br>';   
}
document.querySelector('.subscrip').onclick = () => {
    console.log('qwe');
    document.querySelector('.contact-window').style.display = 'block';
}
document.querySelector('.send-info').onclick = () => {
    console.log('qwe');
    document.querySelector('.contact-window').style.display = 'none';
}
document.querySelector('.close-window').onclick = () => {
    console.log('qwe');
    document.querySelector('.contact-window').style.display = 'none';
}


