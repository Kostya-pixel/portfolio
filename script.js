let socialBlock = document.querySelector('.link-social');
let btnLink = document.querySelector('.link-off');
let arrowOff = document.querySelector('.off-arrow');
let arrowOn = document.querySelector('.on-arrow');

    btnLink.onclick = function() {
        if (socialBlock.style.left =='-70px') {
            socialBlock.style.left = '0px';
            arrowOff.style.display = 'block';
            arrowOn.style.display = 'none';
            btnLink.style.outline = 'none';
        }
        else {
            socialBlock.style.left = '-70px';
            arrowOn.style.display = 'block';
            arrowOff.style.display = 'none';
            btnLink.style.outline = 'none';
        }
        
    }
