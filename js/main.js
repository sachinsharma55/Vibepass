// =========================================================
// VibePass — main.js
// Requires jQuery + Slick Carousel loaded before this file.
// =========================================================
$(function () {
  // ---- Trending events slider -----------------------------------------
  const $trending = $(".js-trending-slider");
  if ($trending.length) {
    $trending.slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      infinite: true,
      autoplay: false,
      prevArrow: $(".js-trending-prev"),
      nextArrow: $(".js-trending-next"),
      responsive: [
        { breakpoint: 1200, settings: { slidesToShow: 3 } },
        { breakpoint: 992, settings: { slidesToShow: 2 } },
        { breakpoint: 576, settings: { slidesToShow: 1 } }
      ]
    });
  }

  // ---- Testimonials slider ------------------------------------------------
  const $testimonials = $(".js-testimonial-slider");
  if ($testimonials.length) {
    $testimonials.slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 6000,
      prevArrow: $(".js-testimonial-prev"),
      nextArrow: $(".js-testimonial-next"),
      responsive: [
        { breakpoint: 992, settings: { slidesToShow: 2, dots: false } },
        { breakpoint: 576, settings: { slidesToShow: 1, arrows: false } }
      ]
    });
  }

  // ---- Header shadow on scroll ------------------------------------------
  const $header = $(".vp-header");
  $(window).on("scroll", function () {
    $header.toggleClass("shadow-sm", $(window).scrollTop() > 8);
  });

  // ---- Pause hero background video for users who prefer reduced motion --
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  const heroVideo = document.querySelector(".js-hero-video");
  if (heroVideo && prefersReducedMotion) {
    heroVideo.pause();
    heroVideo.removeAttribute("autoplay");
  }
});
