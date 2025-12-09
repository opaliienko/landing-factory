import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import {
  SectionWrapper,
  Container,
  Title,
  Subtitle,
  SwiperNavButtons,
  FadeInWhenVisible,
} from "@/components/ui";

import { useSectionInView } from "@/hooks/useSectionInView";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Reviews = ({ content, theme }) => {
  const { ref, inView } = useSectionInView();

  const Card = content.card;

  return (
    <SectionWrapper
      ref={ref}
      style={{
        background: theme.colors.gradients.main,
        fontFamily: theme.fonts.fontsFamily.regular,
      }}
    >
      <Container>
        {content.title && (
          <Title
            text={content.title}
            style={{ color: theme.colors.TITLE_TEXT_COLOR }}
            theme={theme}
            inView={inView}
            delay={100}
          />
        )}

        {content.title && (
          <Subtitle
            text={content.subtitle}
            style={{ color: theme.colors.TEXT_COLOR }}
            theme={theme}
            inView={inView}
            delay={200}
          />
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
      </Container>
    </SectionWrapper>
  );
};

export default Reviews;
