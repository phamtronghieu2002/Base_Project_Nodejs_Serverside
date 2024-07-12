const btn_scroll_to_top =$('.scroll-top');

btn_scroll_to_top.click(function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
window.addEventListener("scroll", function () {

    if (window.scrollY > 100) {
        btn_scroll_to_top.addClass("open");
    } else {
        btn_scroll_to_top.removeClass("open");
    }
  });
  
  