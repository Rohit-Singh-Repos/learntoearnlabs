import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import { Image, CommonCard } from "components";
import "swiper/css";

export const SliderComponent = React.memo(({sliderData}) => {
  return (
    <Swiper
      spaceBetween={50}
      breakpoints={{
        640: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={false}
      modules={[Autoplay, Navigation]}
      className="mySwiper"
    >
      {sliderData && sliderData.length !== 0 ? (
        sliderData.map((item) => (
          <SwiperSlide key={item.id}>
            <CommonCard cardClass="border-1 rounded-0 text-light">
              <Image
                imageClass="img-thumbnail"
                imageAltText={item.altText}
                imagePath={item.imagePath}
              />
            </CommonCard>
          </SwiperSlide>
        ))
      ) : (
        <></>
      )}
    </Swiper>
  );
});
