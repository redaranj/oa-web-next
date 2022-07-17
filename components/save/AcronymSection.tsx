import { FC } from "react";
import { Box } from "@mui/material";
import { colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { AcronymItem } from "components/save/AcronymItem";
import sharePhone from "public/images/share-phone.png";
import { Autoplay, EffectFade } from "swiper";
/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
/* eslint-enable import/no-unresolved */

export const AcronymSection: FC = () => {
  const { white } = colors;
  // const { ps, ts } = breakpoints;

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
          <SwiperSlide>
            <AcronymItem
              titleKey="shareTitle"
              descriptionOneKey="shareDescriptionOne"
              descriptionTwoKey="shareDescriptionTwo"
              image={sharePhone}
            />
          </SwiperSlide>
          <SwiperSlide>
            <AcronymItem
              titleKey="archiveTitle"
              descriptionOneKey="archiveDescriptionOne"
              descriptionTwoKey="archiveDescriptionTwo"
              image={sharePhone}
            />
          </SwiperSlide>
          <SwiperSlide>
            <AcronymItem
              titleKey="verifyTitle"
              descriptionOneKey="verifyDescriptionOne"
              descriptionTwoKey="verifyDescriptionTwo"
              image={sharePhone}
            />
          </SwiperSlide>
          <SwiperSlide>
            <AcronymItem
              titleKey="encryptTitle"
              descriptionOneKey="encryptDescriptionOne"
              descriptionTwoKey="encryptDescriptionTwo"
              image={sharePhone}
            />
          </SwiperSlide>
        </Swiper>
      </Box>
    </PageSection>
  );
};
