// ------------ PRESS SLIDER
$(document).ready(function () {
    $('.pressSlider').slick({
      // auto play: true or false
      autoplay: true,
      // time in mili seconds for it to auto play
      autoplaySpeed: 2000,
      // speed in mili seconds for it to transition on slide
      speed: 300,
      // how many slides are on screen
      slidesToShow: 5,
      // how many slides will slide on click on arrows or on auto play
      slidesToScroll: 1,
      // are there dots under the slideshow for navigation
      dots: false,
      // does it loop (true) or when it gets to the end does it stop (false)
      infinite: true,
      // are all your slides the same width or are some wider and some thiner (mostly used in galleries with imgs at different aspect ratios)
      variableWidth: false,
      // does it focus on the center image ( mostly usefull with variableWidth: true, wont see alot of difference if you have set widths)
      centerMode: false,
      // are there arrows on the side
      arrows: false,
      //prevArrow: '<button class="hide-mob" type="button" class="slick-prev"></button>',
      //nextArrow: '<button class="hide-mob" type="button" class="slick-next"></button>',
      responsive: [
        {
          breakpoint: 1080,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
          },
        },
      ]
    });
  });

// ------------ AUTO UPDATE FOOTER YEAR
document.getElementById("year").innerHTML = new Date().getFullYear();
// If using a different copyright for mobile, ensure to include the below. ID will only work once
// document.getElementById("year-mob").innerHTML = new Date().getFullYear();