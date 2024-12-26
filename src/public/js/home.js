const bar_menu_button = document.querySelector('.bar_menu_button');
const close_menu_button = document.querySelector('.close_menu_button');
const menu_toggle = document.querySelector('.menu_toggle');
const overlay = document.querySelector('#overlay');


const toggleMenu = () => {
    menu_toggle.classList.toggle('show-menu-toggle');
    overlay.classList.toggle('show-overlay');
}

bar_menu_button.addEventListener('click', () => {
    toggleMenu();
});

close_menu_button.addEventListener('click', () => {
    toggleMenu();
}
);

window.addEventListener('click', (e) => {
    if (e.target === overlay) {
        toggleMenu();
    }
});

// tôi muốn khi màn hình cuộn xuống 100px thì hiện nút scroll to top
const sticky_menu = document.querySelector('.breadcurmb');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        sticky_menu.classList.add('breadcurmb-sticky');
    } else {
        sticky_menu.classList.remove('breadcurmb-sticky');
    }
});
