var btnMenu = document.getElementById('button--menu');
var menu = document.getElementById('menu')

btnMenu.addEventListener('click', function () {
    var menuDisplay = menu.style.display;

    if(menuDisplay == 'none'){
        menu.style.display = 'flex'
    } else{
        menu.style.display = 'none'
    }
});
