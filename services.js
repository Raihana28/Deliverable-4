$('.dropdown-item').click(function(e) {
    if (e.target !== e.currentTarget) return;
    e.preventDefault();
    $(this).siblings('.dropdown-item').removeClass('opened');
    $(this).toggleClass('opened');
    $(this).find('.dropdown-menu').slideToggle();
});