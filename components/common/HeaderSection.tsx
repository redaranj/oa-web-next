import { FC, PropsWithChildren } from "react";
import { StaticImageData } from "next/image";
import { Box } from "@mui/material";
import { colors, breakpoints } from "styles/theme";
import { PageSection } from "components/common/PageSection";

const { white } = colors;

type HeaderSectionProps = PropsWithChildren<{
  backgroundColor?: string;
  backgroundImage?: StaticImageData;
}>;

export const HeaderSection: FC<HeaderSectionProps> = ({
  backgroundColor = white,
  backgroundImage,
  children,
}) => {
  const { ps, ts, dl } = breakpoints;

  return (
    <PageSection
      backgroundColor={backgroundColor}
      backgroundImage={backgroundImage}
    >
      <Box
        sx={{
          minHeight: 20,
          pt: "90px",
          [ps]: { pt: "50px" },
          [ts]: { pt: "80px" },
          [dl]: { pt: "90px" },
        }}
      >
        {children}
      </Box>
    </PageSection>
  );
};
