import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiper.css";

import { Pagination, Navigation } from "swiper/modules";

import SwiperNavButtons from "../ui/SwiperNavButtons";

const Reviews = ({ content, theme }) => {
  const customClasses = content.customClasses || {};

  return (
    <section
      className={customClasses.section}
      style={{ backgroundColor: theme.colors.MAIN_BG_COLOR }}
    >
      <div className={customClasses.container}>
        {content.title && (
          <h2
            className={customClasses.title}
            style={{ color: theme.colors.TEXT_COLOR }}
          >
            {content.title}
          </h2>
        )}
        <Swiper
          speed={300}
          slidesPerView={1}
          spaceBetween={20}
          autoplay
          loop={true}
          modules={[Pagination, Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1440: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
        >
          {content.reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="p-6 bg-white shadow rounded-xl animate-fadeIn h-64">
                <p>{review.text}</p>
                <h4 className="mt-4 font-semibold">{review.name}</h4>
              </div>
            </SwiperSlide>
          ))}

          <SwiperNavButtons theme={theme} />
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
