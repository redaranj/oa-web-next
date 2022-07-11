import { FC } from "react";
import Image from "next/image";
import { Box } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors, loader } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { OutlinedButton } from "components/common/OutlinedButton";
import FourOne from "images/not-found-four-one.svg";
import Zero from "images/not-found-zero.svg";
import FourTwo from "images/not-found-four-two.svg";

export const NotFoundSection: FC = () => {
  const t = useTranslate();
  const { white, turquoise } = colors;
  const { h2, h6 } = typography;

  return (
    <PageSection backgroundColor={white}>
      <Box>
        <Box sx={{ textAlign: "center" }}>
          <Box sx={{ ...h2, color: turquoise }}>{t("oops")}</Box>
          <Box sx={{ ...h6, mb: 6 }}>{t("cantFindPage")}</Box>
          <OutlinedButton>{t("goToMainPage")}</OutlinedButton>
        </Box>
        <Image src={FourOne} loader={loader} />
        <Image src={Zero} loader={loader} />
        <Image src={FourTwo} loader={loader} />
      </Box>
    </PageSection>
  );
};
