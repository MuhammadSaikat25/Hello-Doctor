
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Time from "../Time/Time";


const Review = () => {
    return (
        <div>
            <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="">
               <Time></Time>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="">
               <Time></Time>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="">
               <Time></Time>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="">
               <Time></Time>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="">
               <Time></Time>
            </div>
        </SwiperSlide>
        
      </Swiper>
        </div>
    );
};

export default Review;