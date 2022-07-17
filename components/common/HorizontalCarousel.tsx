import { FC, PropsWithChildren } from "react";
import Image from "next/image";
import { Box, Button, Grid } from "@mui/material";
import { A11y } from "swiper";
/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
/* eslint-enable import/no-unresolved */
import { colors, loader } from "styles/theme";
import back from "public/images/back.svg";
import forward from "public/images/forward.svg";

const SlideNavigation = () => {
  const swiper = useSwiper();
  const { mediumGrey } = colors;

  return (
    <Box
      sx={{
        height: 25,
        position: "absolute",
        bottom: 35,
        width: "100%",
      }}
    >
      <Grid container direction="row" spacing={3} alignItems="center">
        <Grid item>
          <Button onClick={() => swiper.slidePrev()}>
            <Image src={back} loader={loader} />
          </Button>
          <Button onClick={() => swiper.slideNext()}>
            <Image src={forward} loader={loader} />
          </Button>
        </Grid>
        <Grid item sx={{ width: "80%" }}>
          <Box
            sx={{
              flexGrow: 1,
              height: "1px",
              width: "100%",
              backgroundColor: mediumGrey,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
type HorizontalCarouselProps = PropsWithChildren<{
  breakpoints?: any;
  columnOnMobile?: boolean;
  visibleCount?: number;
  spaceBetween?: number;
}>;

// const { mediumGrey } = colors;t

export const HorizontalCarousel: FC<HorizontalCarouselProps> = ({
  breakpoints = {},
  columnOnMobile = false,
  visibleCount = 2.5,
  spaceBetween = 20,
  children,
}) => {
  const { ps, ts } = breakpoints;
  console.log({ columnOnMobile, ps, ts });

  return (
    <Box>
      <Box>
        <Swiper
          modules={[A11y]}
          spaceBetween={spaceBetween}
          slidesPerView={visibleCount}
          breakpoints={breakpoints}
          style={{ paddingBottom: 90 }}
        >
          {(children as any).map((child: any, index: number) => (
            <SwiperSlide key={index}>{child}</SwiperSlide>
          ))}
          <SlideNavigation />
        </Swiper>
      </Box>
    </Box>
  );
};
