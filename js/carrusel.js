const swiper = new Swiper(".mySwiper", {

    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor:true,
    loop:true,
    breakpoints: {
        991: {
            slidesPerView:4
        }
    }
})

