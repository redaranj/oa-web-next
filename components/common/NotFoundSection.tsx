import { FC } from "react";
import Image from "next/image";
import { MDXProvider } from "@mdx-js/react";
import { Box } from "@mui/material";
import { colors, loader } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import FourOne from "public/images/not-found-four-one.svg";
import Zero from "public/images/not-found-zero.svg";
import FourTwo from "public/images/not-found-four-two.svg";

export const NotFoundSection: FC = ({ children }) => {
  const { white } = colors;

  return (
    <PageSection backgroundColor={white}>
      <Box>
        <Box sx={{ textAlign: "center" }}>
          <MDXProvider>{children}</MDXProvider>
          {/*
          <Box sx={{ ...h2, color: turquoise }}>{t("oops")}</Box>
          <Box sx={{ ...h6, mb: 6 }}>{t("cantFindPage")}</Box>
  <OutlinedButton>{t("goToMainPage")}</OutlinedButton> */}
        </Box>
        <Image src={FourOne} loader={loader} />
        <Image src={Zero} loader={loader} />
        <Image src={FourTwo} loader={loader} />
      </Box>
    </PageSection>
  );
};
