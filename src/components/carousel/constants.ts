
const settings = {
slidesToShow: 5,
slidesToScroll: 5,
initialSlide: 0,
dots: false,
infinite: false,
speed: 500,
swipeToSlide: true,
responsive: [

    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      }
    },
    {
      breakpoint: 820,
      settings: {
        slidesToShow: 3.2,
        slidesToScroll: 4,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1,
      }
    },
  ]
  
}

export { settings }
