import { useSwiper } from "swiper/react";

import PrevIcon from "../../icons/PrevIcon";
import NextIcon from "../../icons/NextIcon";

const SwiperNavButtons = ({ theme }) => {
  const swiper = useSwiper();

  return (
    <div className="flex gap-6 justify-center mt-4 sm:mt-6 md:mt-8">
      <button
        onClick={() => swiper.slidePrev()}
        className="
          group
          w-10 h-10
          rounded-full 
          bg-white/30
          border border-white/50
          flex items-center justify-center
          transition-all duration-300
          hover:bg-white/50
          hover:scale-110
          active:scale-95
        "
      >
        <div className="transition-transform group-hover:-translate-x-1">
          <PrevIcon width={20} height={20} fill={theme.colors.ACCENT_COLOR} />
        </div>
      </button>

      <button
        onClick={() => swiper.slideNext()}
        className="
          group
           w-10 h-10
          rounded-full 
          bg-white/30
          border border-white/50
          flex items-center justify-center
          transition-all duration-300
          hover:bg-white/50
          hover:scale-110
          active:scale-95
        "
      >
        <div className="transition-transform group-hover:translate-x-1">
          <NextIcon width={20} height={20} fill={theme.colors.ACCENT_COLOR} />
        </div>
      </button>
    </div>
  );
};

export default SwiperNavButtons;
