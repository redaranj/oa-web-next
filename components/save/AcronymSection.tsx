import { FC } from "react";
import { SwiperSlide } from "swiper/react";
import { colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { HorizontalCarousel } from "components/common/HorizontalCarousel";

export const AcronymSection: FC = ({ children }) => {
  const { white } = colors;
  const items = children as any[];

  return (
    <PageSection backgroundColor={white} sx={{ pb: 0 }}>
      <HorizontalCarousel visibleCount={1} autoplay>
        {items.map((item, index) => (
          <SwiperSlide key={index}>{item}</SwiperSlide>
        ))}
      </HorizontalCarousel>
    </PageSection>
  );
};
