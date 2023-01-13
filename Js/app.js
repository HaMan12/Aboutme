(function ($) {
const scrollChangeHeader = () => {
    $(window).scroll(function () {
      let scrollTop = $(window).scrollTop();
      if (scrollTop > 0) {
        $('.header').addClass('is-active');
        $('.menu-list').addClass('is-active');
      } else {
        $('.header').removeClass('is-active');
        $('.menu-list').removeClass('is-active');
      }
    });
  };
  const initAos = () => {
    AOS.init();
  };
  $(function () {
    scrollChangeHeader();
    initAos();
  });
})(jQuery);