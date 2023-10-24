let menu = document.querySelector('.menu');
let spanTop = document.querySelector('#top');
let spanMiddle = document.querySelector('#middle');
let spanBottom = document.querySelector('#bottom');
let links = document.querySelector('.links');


menu.addEventListener('click',menuHamburger);

function menuHamburger()
{
  if(menu.classList[1] != 'open')
  {
    menu.classList.add('open');
    spanMiddle.style.display = 'none';
    spanTop.style.transform = 'rotate(45deg)';
    spanBottom.style.marginTop = '-5px';
    spanBottom.style.transform = 'rotate(-45deg)';
    links.style.top = '100px';
  }
  else
  {
  
    spanMiddle.style.display = 'block';
    spanTop.style.transform = 'rotate(0deg)';
    spanBottom.style.marginTop = '3px';
    spanBottom.style.transform = 'rotate(0deg)';
    links.style.top = '-300px';
    menu.classList.remove('open');
  }
}





