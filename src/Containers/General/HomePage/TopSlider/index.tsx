/* eslint-disable @next/next/no-img-element */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./slick.module.scss";

const TopSlider = props => {
  const settings = {
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    dotsClass: `slick-dots ${styles["slick-dots"]}`,
    autoplaySpeed: 5000,
    dots: true,
    infinite: true,
  };

  return (
    <div className="relative overflow-hidden my-0 h-[280px] md:rounded-l-md">
      <Slider {...settings}>
        <div>
          <img src="http://placekitten.com/g/400/250" alt="" />
        </div>
        <div>
          <img src="http://placekitten.com/g/400/250" alt="" />
        </div>
        <div>
          <img src="http://placekitten.com/g/400/250" alt="" />
        </div>
        <div>
          <img src="http://placekitten.com/g/400/250" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default TopSlider;
