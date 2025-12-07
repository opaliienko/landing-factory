import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import { useInView } from "react-intersection-observer";

import SwiperNavButtons from "../ui/SwiperNavButtons";
import FadeInWhenVisible from "../ui/FadeInWhenVisible";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiper.css";

const Reviews = ({ content, theme }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const customClasses = content.customClasses || {};

  return (
    <section
      ref={ref}
      className={customClasses.section}
      style={{ backgroundColor: theme.colors.MAIN_BG_COLOR }}
    >
      <div className={customClasses.container}>
        <FadeInWhenVisible animation={theme.animation} inView={inView}>
          <h2 className={customClasses.title}>{content.title}</h2>
        </FadeInWhenVisible>

        {content.subtitle && (
          <FadeInWhenVisible
            animation={theme.animation}
            inView={inView}
            delay={200}
          >
            <p
              className={customClasses.subtitle}
              style={{ color: theme.colors.TEXT_COLOR }}
            >
              {content.subtitle}
            </p>
          </FadeInWhenVisible>
        )}

        <FadeInWhenVisible
          animation={theme.animation}
          inView={inView}
          delay={300}
        >
          <Swiper
            speed={500}
            slidesPerView={1}
            spaceBetween={20}
            slidesPerGroup={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Pagination, Navigation]}
            breakpoints={{
              640: {
                slidesPerView: 3,
                slidesPerGroup: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                slidesPerGroup: 2,
                spaceBetween: 20,
              },
              1440: {
                slidesPerView: 4,
                slidesPerGroup: 2,
                spaceBetween: 24,
              },
            }}
          >
            {content.reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`
                    p-6 bg-white shadow-md rounded-xl h-64
                    flex flex-col justify-between
                    hover:shadow-xl transition-shadow duration-300
                  `}
                >
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: theme.colors.TEXT_COLOR }}
                  >
                    "{review.text}"
                  </p>
                  <div className="border-t pt-4 mt-4">
                    <h4
                      className="font-bold text-lg"
                      style={{ color: theme.colors.ACCENT_COLOR }}
                    >
                      {review.name}
                    </h4>
                    {review.position && (
                      <p
                        className="text-sm opacity-70"
                        style={{ color: theme.colors.TEXT_COLOR }}
                      >
                        {review.position}
                      </p>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <SwiperNavButtons theme={theme} />
          </Swiper>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};

export default Reviews;
