new Swiper('.advantages__carousel', {
    direction: 'horizontal',
    loop: true,

    slidesPerView: 3,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },

    grabCursor: true,
})