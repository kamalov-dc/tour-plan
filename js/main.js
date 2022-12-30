const hotelSlider = new Swiper(".swiper", {
	// Optional parameters
	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: ".slider-button--next",
		prevEl: ".slider-button--prev",
	},
});
const reviewsSlider = new Swiper(".reviews-slider", {
	// Optional parameters
	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: ".reviews-slider__button--next",
		prevEl: ".reviews-slider__button--prev",
	},
});
