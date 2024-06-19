import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Poster } from "../util/models";
import Image from "next/image";


export default function Carousel({posters}:{posters: Poster[]}) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
    return (
        <Slider {...settings}>
            {posters.map((poster) => (
                <div key={poster.name}>
                    <Image src={poster.image} alt={poster.name} className="w-full h-96 object-cover" />
                </div>
            ))}
        </Slider>
    )
}