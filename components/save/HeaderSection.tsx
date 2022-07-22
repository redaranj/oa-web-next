import { FC, useState } from "react";
import Image from "next/image";
import { Box, Grid, Collapse } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors, breakpoints, loader } from "styles/theme";
import { HeaderSection as BaseHeaderSection } from "components/common/HeaderSection";
import { PageSection } from "components/common/PageSection";
import { OutlinedButton } from "components/common/OutlinedButton";
import saveHeader from "public/images/save-header.png";
import saveLogo from "public/images/save-logo.png";
import saveMore from "public/images/save-more.png";

export const HeaderSection: FC = ({ children }) => {
  const [showMore, setShowMore] = useState(false);
  const t = useTranslate();
  const { lightGrey, mediumGrey, white } = colors;
  const { bodyLarge } = typography;
  const { ps, pl, ts, tl, ds, dl } = breakpoints;
  const [title, description, ...rest] = children as any[];

  return (
    <>
      <BaseHeaderSection
        backgroundColor={lightGrey}
        sx={{
          mb: -1,
          py: 13,
          pb: 0,
          px: 11.25,
          [ps]: {
            py: 6,
            px: 3,
            pb: 0,
          },
          [pl]: {
            py: 6,
            px: 3,
            pb: 0,
          },
          [ts]: {
            py: 7,
            px: 4.375,
            pb: 0,
          },
          [tl]: {
            py: 9,
            px: 4.375,
            pb: 0,
          },
          [ds]: {
            py: 13,
            px: 6.25,
            pb: 0,
          },
          [dl]: {
            py: 13,
            px: 11.25,
            pb: 0,
          },
        }}
      >
        <Grid
          container
          sx={{
            flexDirection: "row",
            [ps]: { flexDirection: "column" },
            [ts]: { flexDirection: "row" },
          }}
        >
          <Grid
            container
            direction="column"
            item
            sx={{
              width: "50%",
              [ps]: {
                width: "100%",
              },
              [ts]: {
                width: "50%",
              },
            }}
          >
            <Grid item container direction="row" spacing="30px">
              <Grid item>
                <Box
                  sx={{
                    width: "90px",
                    mt: "12px",
                  }}
                >
                  <Image src={saveLogo} loader={loader} alt="Save logo" />
                </Box>
              </Grid>
              <Grid item>
                <Box
                  sx={{
                    width: "1px",
                    mt: "12px",
                    height: "70%",
                    backgroundColor: mediumGrey,
                  }}
                />
              </Grid>
              <Grid item>{title}</Grid>
            </Grid>
            <Grid item container direction="column">
              <Grid item>
                <Box
                  component="p"
                  sx={{ ...bodyLarge, maxWidth: "550px", mb: "60px" }}
                >
                  {description}
                </Box>
              </Grid>
              <Grid item>
                <OutlinedButton
                  arrowDirection="down"
                  onClick={() => setShowMore(!showMore)}
                >
                  {t("more")}
                </OutlinedButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="column"
            sx={{
              width: "50%",
            }}
          >
            <Grid item>
              <Box sx={{ width: "100%", [ps]: { width: "100%" } }}>
                <Image src={saveHeader} loader={loader} alt="" />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </BaseHeaderSection>
      <Collapse in={showMore}>
        <PageSection backgroundColor={white}>
          <Grid
            container
            sx={{
              flexDirection: "row",
              [ps]: { flexDirection: "column" },
              [ts]: { flexDirection: "row" },
            }}
          >
            <Grid item sx={{ width: "50%" }}>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: `url(${saveMore.src})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                }}
              />
            </Grid>
            <Grid item sx={{ width: "50%" }}>
              <Box sx={{ p: 3 }}>{rest}</Box>
            </Grid>
          </Grid>
        </PageSection>
      </Collapse>
    </>
  );
};
