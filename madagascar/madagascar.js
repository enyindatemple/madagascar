const header2 = document.querySelectorAll('.header2 ul li');
const p = document.querySelector('.header2 p');
let isClicked = false;


header2.forEach((li)=>{
    li.addEventListener('click', ()=>{
        if(!isClicked){
            li.setAttribute('style', 'color: #0c0145');
            isClicked = true;
        } else{
            li.setAttribute('style', 'color: #ffffff');
        };
    });
});