import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const HeroSection = () => {
    const image = [{
        "id":"1",
       "url": "https://img.freepik.com/free-photo/car-tires-showcased-inside-automobile-workshop_157027-4455.jpg?t=st=1725423696~exp=1725427296~hmac=559e7b1d1215c5ec7c95c7756323203ee06a66ded947d0a9e21c631a7d613492&w=826"
    },
    {
        "id":"2",
      "url":"https://as2.ftcdn.net/v2/jpg/03/82/43/91/1000_F_382439158_a8zdPAPTgPGzIom7T8vF0dpi4B9TgZL6.jpg"
    },
    {
        "id":"3",
        "url":"https://as1.ftcdn.net/v2/jpg/04/51/19/82/1000_F_451198299_kKLSe1S0nA65wUFgdI9StM0wNpXCXumK.jpg"
    },
    {
        "id":"4",
        "url":"https://img.freepik.com/premium-photo/two-tires-standing-dirt-road-sunset_96318-179978.jpg?w=740"
    }
    ]
    console.log(image);
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        cssEase: "linear"
    };
    return (
        <div className='relative'>
            <div className='relative'>
            <Slider {...settings}>
                {image?.map((image)=>{
                    return (
                    
                        <div key={image.id} className='w-full h-96 '>
                          <img src={image.url} alt="auto play" className='w-full h-full '/>
                        </div>
                    )
                })}
            </Slider>
            <div className='absolute bottom-0 w-full flex justify-evenly h-[200px] text-white bg-black opacity-65'>
                 <div className='left-content'>
                    left content
                    
                 </div>
                 <div className='right-content  border-end '>right content</div>
            </div>
            </div>
            
        </div>
    )
}

export default HeroSection