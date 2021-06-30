import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";

const Banner = (): JSX.Element => {
  return (
    <CarouselProvider
      naturalSlideHeight={120}
      naturalSlideWidth={400}
      totalSlides={2}
      infinite
      isPlaying
      interval={5000}
    >
      <Slider>
        <Slide index={0}>
          <div className="px-5">
            <Slide1 />
          </div>
        </Slide>
        <Slide index={1}>
          <div className="px-5">
            <Slide2 />
          </div>
        </Slide>
      </Slider>
    </CarouselProvider>
  );
};

export default Banner;
