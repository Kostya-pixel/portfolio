let modalCont = document.getElementById('myModalCont');
let modalAbout = document.getElementById('myModalAbout');
let modalConsult = document.getElementById('myModaConsult');

let btnContacts = document.getElementById('myBtnCont');
let btnAbout = document.getElementById('myBtnAbout');
let btnConsult = document.getElementById('myBtnConsult');

let spanCont = document.getElementsByClassName('close_cont')[0];
let spanAbout = document.getElementsByClassName('close_about')[0];
let spanConsult = document.getElementsByClassName('close_consult')[0];


// ---------------modal window block Contacts---------------------


btnContacts.onclick = function(){
    modalCont.style.display = 'block';
}

spanCont.onclick = function(){
    modalCont.style.display = 'none';
}

window.onclick = function(event){
    if (event.target == modalCont){
        modalCont.style.display = 'none'; 
    }else if(event.target == modalAbout){
        modalAbout.style.display = 'none';
    }else if (event.target == modalConsult){
        modalConsult.style.display = 'none';
    }
}

// ---------------modal window block About---------------------

btnAbout.onclick = function(){
    modalAbout.style.display = 'block';
}

spanAbout.onclick = function(){
    modalAbout.style.display = 'none';
}

// -----------------modal window block consultation-----------

btnConsult.onclick = function(){
    modalConsult.style.display = 'block';
}

spanConsult.onclick = function(){
    modalConsult.style.display = 'none';
}

