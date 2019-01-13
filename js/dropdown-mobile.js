let btnMenu = document.getElementById('btnMenu');
let menu = document.getElementById('menu');
let main = document.getElementById('main');
let footer = document.getElementById('footer');

btnMenu.addEventListener('click', () => {
  if(menu.style.visibility == 'hidden') {
    menu.style.visibility = 'visible';
    btnMenu.src = './img/exit-menu.svg'
  } else {
    menu.style.visibility = 'hidden';
    btnMenu.src = './img/humburger.svg'
  }
})

main.addEventListener('click', function(){
    menu.style.visibility = 'hidden';
    btnMenu.src = './img/humburger.svg'
});

footer.addEventListener('click', function(){
    menu.style.visibility = 'hidden';
    btnMenu.src = './img/humburger.svg'
});
