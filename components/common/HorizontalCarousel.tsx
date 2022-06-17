import { FC, PropsWithChildren } from "react";
// import Image from "next/image";
import { Box } from "@mui/material";
import { Navigation, Pagination, A11y } from "swiper";
/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
/* eslint-enable import/no-unresolved */
// import back from "images/back.svg";
// import forward from "images/forward.svg";

type HorizontalCarouselProps = PropsWithChildren<{
  breakpoints?: any;
  columnOnMobile?: boolean;
}>;

// const { mediumGrey } = colors;

export const HorizontalCarousel: FC<HorizontalCarouselProps> = ({
  breakpoints = {},
  columnOnMobile = false,
  children,
}) => {
  const { ps, ts } = breakpoints;
  console.log({ columnOnMobile, ps, ts });

  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={10}
      slidesPerView={2.5}
      breakpoints={breakpoints}
      navigation
      pagination={{ clickable: true }}
      style={{ background: "red" }}
    >
      {(children as any).map((child: any, index: number) => (
        <SwiperSlide key={index}>
          <Box sx={{ background: "orange" }}>{child}</Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
