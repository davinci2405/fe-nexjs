/* eslint-disable @next/next/no-img-element */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./slick.module.scss";
import Img from "@Components/Hocs/Img";

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

  const data = Array(5).fill("http://placekitten.com/g/400/150");

  return (
    <div className="w-full pt-5">
      <div className="w-[370px] h-[150px] mx-auto z-10">
        <Slider {...settings}>
          {data.map((e, i) => (
            <Img key={i} src={e} className="rounded-xl" />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TopSlider;
