import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import { useInView } from "react-intersection-observer";

import Title from "../ui/Title";
import Subtitle from "../ui/Subtitle";
import SwiperNavButtons from "../ui/SwiperNavButtons";
import FadeInWhenVisible from "../ui/FadeInWhenVisible";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Reviews = ({ content, theme }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const customClasses = content.customClasses || {};
  const Card = content.card;

  return (
    <section
      ref={ref}
      className={customClasses.section}
      style={{ backgroundColor: theme.colors.MAIN_BG_COLOR }}
    >
      <div className={customClasses.container}>
        {content.title && (
          <Title
            styles={customClasses.title}
            color={theme.colors.TEXT_COLOR}
            text={content.title}
            theme={theme}
            inView={inView}
            delay={0}
          />
        )}

        {content.title && (
          <Subtitle
            styles={customClasses.subtitle}
            color={theme.colors.TEXT_COLOR}
            text={content.subtitle}
            theme={theme}
            inView={inView}
            delay={100}
          />
        )}

        <FadeInWhenVisible
          animation={theme.animation}
          inView={inView}
          delay={200}
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
                slidesPerView: 2,
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
            {content.reviews.map((review, index) => {
              const IconComponent = review.icon;

              return (
                <SwiperSlide key={index}>
                  <Card
                    key={review.id}
                    data={review}
                    icon={IconComponent}
                    theme={theme}
                  />
                </SwiperSlide>
              );
            })}

            <SwiperNavButtons theme={theme} />
          </Swiper>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};

export default Reviews;
