var btnMenu = document.querySelector('.nav__respbtn');

var menu = document.querySelector('.nav__ul');

btnMenu.addEventListener('click', function(){
    menu.classList.toggle("active");
    console.log("Click");
});