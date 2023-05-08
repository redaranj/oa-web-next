import { FC, PropsWithChildren } from "react";
import Image from "next/legacy/image";
import { Grid, Box } from "@mui/material";
import { loader, breakpoints, typography, colors } from "styles/theme";
import { HeaderSection as BaseHeaderSection } from "components/common/HeaderSection";
import programsHeader from "public/images/programs-header.svg";


export const CommunitiesSection: FC<PropsWithChildren> = ({
  children
}) => {
  const { lightGrey } = colors;
  const { bodyLarge } = typography;
  const { ps, ts } = breakpoints;

  return (
    <BaseHeaderSection backgroundColor={lightGrey}>
      <Grid
        container
        justifyContent="space-between"
        sx={{
          flexDirection: "row",
          [ps]: {
            flexDirection: "column",
          },
          [ts]: { flexDirection: "row" },
        }}
        spacing={6}
      >
        <Grid
          item
          sx={{ width: "50%", [ps]: { width: "100%", [ts]: { width: "50%" } } }}
        >
          <Box sx={{ "> p": bodyLarge, "> ul": bodyLarge }}>
            {children}
          </Box>
        </Grid>
        <Grid
          item
          container
          direction="column"
          justifyContent="top"
          sx={{ width: "50%", [ps]: { width: "100%", [ts]: { width: "50%" } } }}
        >
          <Grid item>
            <Box
              sx={{
                float: "right",
                height: "80%",
                width: "80%",
              }}
            >
              <Image src={programsHeader} alt="" loader={loader} />
            </Box>
          </Grid>
        </Grid>

      </Grid>
    </BaseHeaderSection >
  );
};
