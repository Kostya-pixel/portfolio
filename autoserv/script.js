

let btnHeader = document.getElementById('1');
let btnFooter = document.getElementById('2');
let cancelDialogWindow = document.querySelector('.block-inner');
let closeDialog = document.querySelector('.cancel');
let btnDiagnost = document.querySelector('.btn__diagnostics');

closeDialog.onclick = function () {
document.querySelector('.dialog__window').style.visibility = 'hidden';
}

btnHeader.onclick =  function f1() {
console.log('visible');
document.querySelector('.dialog__window').style.visibility = 'visible'; 
}

cancelDialogWindow.onclick = function f2() {
console.log('closed');
document.querySelector('.dialog__window').style.visibility = 'hidden';
}

btnFooter.onclick =  function f3(event) {
event.stopPropagation();
console.log('visible');
document.querySelector('.dialog__window').style.visibility = 'visible'; 
}

cancelDialogWindow.onclick = function f4() {
console.log('closed');
document.querySelector('.dialog__window').style.visibility = 'hidden';
}

btnDiagnost.onclick =  function f5(event) {
event.stopPropagation();
console.log('visible');
document.querySelector('.dialog__window').style.visibility = 'visible'; 
}
    
cancelDialogWindow.onclick = function f6() {
console.log('closed');
document.querySelector('.dialog__window').style.visibility = 'hidden';
}