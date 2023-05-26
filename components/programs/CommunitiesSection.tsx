import { FC, PropsWithChildren } from "react";
import Image from "next/legacy/image";
import { Box } from "@mui/material";
import { loader, breakpoints, typography, colors } from "styles/theme";
import { HeaderSection as BaseHeaderSection } from "components/common/HeaderSection";
import programsHeader from "public/images/programs-header.svg";

export const CommunitiesSection: FC<PropsWithChildren> = ({ children }) => {
  const { lightGrey } = colors;
  const { bodyLarge } = typography;
  const { ps, ds } = breakpoints;

  return (
    <BaseHeaderSection backgroundColor={lightGrey}>
      <Box
        sx={{
          float: "right",
          width: "440px",
          margin: 5,
          [ps]: {
            float: "none",
            margin: "0 auto",
            pb: 4,
            width: "60%",
            mt: -12,
          },
          [ds]: { float: "right", width: "440px", margin: 5 },
        }}
      >
        <Image src={programsHeader} alt="" loader={loader} />
      </Box>
      <Box sx={{ "> p": bodyLarge, "> ul": bodyLarge }}>{children}</Box>
    </BaseHeaderSection>
  );
};
