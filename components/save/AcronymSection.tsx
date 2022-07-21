import { FC } from "react";
import { Box } from "@mui/material";
import { colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";
// import sharePhone from "public/images/share-phone.png";
import { Autoplay, EffectFade } from "swiper";
/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
/* eslint-enable import/no-unresolved */

export const AcronymSection: FC = ({ children }) => {
  const { white } = colors;
  // const { ps, ts } = breakpoints;
  const items = children as any[];

  return (
    <PageSection backgroundColor={white} sx={{ pb: 0, mb: -13 }}>
      <Box sx={{ height: 700, overflow: "hidden" }}>
        <Swiper
          modules={[Autoplay, EffectFade]}
          direction="vertical"
          autoHeight
          effect="fade"
          slidesPerView={1}
          autoplay={{
            delay: 4000,
          }}
          fadeEffect={{ crossFade: true }}
          loop
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>{item}</SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </PageSection>
  );
};
