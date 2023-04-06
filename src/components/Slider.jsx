import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import { Image, CommonCard, Span, Paragraph } from "components";
import "swiper/css";

export const SliderComponent = React.memo(({sliderData}) => {
  console.log("sliderData",sliderData)
  
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
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
      autoplay={{
        delay: 2500,
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
            <CommonCard cardClass="card border-1 rounded-0 text-light">
              <Image
                imageClass="img-fluid"
                imageAltText={item.altText}
                imagePath={item.imagePath}
              />
              {
                item.imageName && item.imageEducation && item.imageExperience ? <Paragraph paragraphClass="fw-bold text-dark text-15 align-center mt-3">{item.imageName}<br/>{item.imageEducation}<br/>{item.imageExperience}</Paragraph> : <></>
              }
            </CommonCard>
          </SwiperSlide>
        ))
      ) : (
        <></>
      )}
    </Swiper>
  );
});
