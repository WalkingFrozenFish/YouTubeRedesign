const swiper = new Swiper('.channel-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 6,
    // Navigation arrows
    navigation: {
        nextEl: '.channel-button-next',
        prevEl: '.channel-button-prev',
    },
});

const swiperRecomended = new Swiper('.recomended-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 3,
    // Navigation arrows
    navigation: {
        nextEl: '.recomended-button-next',
        prevEl: '.recomended-button-prev',
    },
});

const swiperFood = new Swiper('.food-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 6,
    // Navigation arrows
    navigation: {
        nextEl: '.food-button-next',
        prevEl: '.food-button-prev',
    },
});