//handle show menu when scroll
const sticky_header = $("#sticky-header");
const menu_mobile = $(".offcanvas-start");

const ToggleMenuMobile = (isOpen) => {
    isOpen ?  menu_mobile.addClass("show") : menu_mobile.removeClass("show");
}

window.addEventListener("scroll", function () {
  var header = document.getElementById("header");
  if (window.scrollY > 50) {
    sticky_header.addClass("sticky-menu");
  } else {
    sticky_header.removeClass("sticky-menu");
  }
});

