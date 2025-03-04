'use client'
import React from "react";
import Image, { StaticImageData } from "next/image";
import Slider from "react-slick";
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

import img1 from "@/assets/images/logo/clints/solar1.png"
import img2 from "@/assets/images/logo/clints/solar2.png"
import img3 from "@/assets/images/logo/clints/solar3.png"
import img5 from "@/assets/images/logo/clints/soalr4.png"
import img4 from "@/assets/images/logo/clints/soalr5.jpeg"




// slider setting
const slider_setting = {
  dots: false,
  arrows: false,
  centerPadding: "0px",
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: false,
    // dots: false,
    // infinite: true,
    // speed: 4000,
    // slidesToShow: 6,
    // slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 0,
    // cssEase: 'linear',
    // pauseOnHover: false,
    // arrows: false,
    // vertical: false, // Change to true if you want vertical scrolling
    // verticalSwiping: false, // Change to true if you want vertical swiping
//   dots: false,
//   arrows: false,
//   centerPadding: "0px",
//   slidesToShow: 6,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

const slider_setting2 = {
  dots: false,
  arrows: false,
  centerPadding: "0px",
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: false,
  rtl: true, // Right to left mode
    // dots: false,
    // infinite: true,
    // speed: 4000,
    // slidesToShow: 6,
    // slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 0,
    // cssEase: 'linear',
    // pauseOnHover: false, 
    // arrows: false,
    // vertical: false, // Change to true if you want vertical scrolling
    // rtl: true, // Right to left mode
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

// slider logos
const slider_logos:StaticImageData[] = [img1, img2, img3, img4, img5, img1, img2, img3, img4, img5,];
// const slider_logos2:StaticImageData[] = [img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23,];

const ClintLogo = () => {
  return (
    <>
        <div className="partner-logo-one  pb-80 lg-pb-40 service-details">
            <div className="">
                    <div className="title-one text-center mb-60 details-meta">
                        {/* <div className="upper-title"></div> */}
                        <h2>Our Client
                        </h2>
                    </div>
                <Slider {...slider_setting} className="partner-slider-one green-boader">
                {slider_logos.map((logo, i) => (
                    <div key={i} className="item">
                    <div className="p-3 d-flex justify-content-center">
                        <Image src={logo} alt="Cgb Clint Logo" layout='' width={154} height={94} style={{ height: "auto" }} />
                    </div>
                    </div>
                ))}
                </Slider>
                <div className="marquee-cover"></div>
                {/* <Slider {...slider_setting2} className="partner-slider-one">
                {slider_logos2.map((logo, i) => (
                    <div key={i} className="item">
                    <div className="p-3">
                        <Image src={logo} alt="Cgb Clint Logo" layout='responsive' width={154} height={94} style={{ height: "auto" }} />
                    </div>
                    </div>
                ))}
                </Slider> */}
            </div>
        </div>
    </>
  );
};

export default ClintLogo;
