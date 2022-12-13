import { FC, PropsWithChildren } from "react";
import Image from "next/legacy/image";
import { MDXProvider } from "@mdx-js/react";
import { Box } from "@mui/material";
import { colors, loader } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import FourOne from "public/images/not-found-four-one.svg";
import Zero from "public/images/not-found-zero.svg";
import FourTwo from "public/images/not-found-four-two.svg";

export const NotFoundSection: FC<PropsWithChildren> = ({ children }) => {
  const { white } = colors;

  return (
    <PageSection backgroundColor={white}>
      <Box>
        <Box sx={{ textAlign: "center" }}>
          <MDXProvider>{children}</MDXProvider>
        </Box>
        <Box sx={{ position: "relative", minHeight: 700, mt: 5 }}>
          <Box sx={{ position: "absolute", top: 40, left: 0, width: "38%" }}>
            <Image src={FourOne} alt="four" loader={loader} />
          </Box>
          <Box sx={{ position: "absolute", top: 0, left: "33%", width: "38%" }}>
            <Image src={Zero} alt="oh" loader={loader} />
          </Box>
          <Box
            sx={{ position: "absolute", top: 90, left: "66%", width: "38%" }}
          >
            <Image src={FourTwo} alt="four" loader={loader} />
          </Box>
        </Box>
      </Box>
    </PageSection>
  );
};
