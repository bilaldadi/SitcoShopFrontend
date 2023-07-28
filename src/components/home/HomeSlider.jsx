import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


class HomeSlider extends Component {

  render() {

    const SliderList = this.props.SliderData;
    const MyView = SliderList.map((SliderList,i)=>{
      return <div key={i.toString()}>
                <img alt='' className="slider-img" src={SliderList.slider_image} />
             </div>
    });

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed:3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        <div>

                <Slider {...settings}>

                        {MyView}

                        </Slider>

            
        </div>
    )
  }
}

export default HomeSlider
