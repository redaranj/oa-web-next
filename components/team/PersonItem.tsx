import { FC, useState } from "react";
import Image, { StaticImageData } from "next/legacy/image";
import { Box, Grid, Collapse } from "@mui/material";
import { OutlinedButton } from "components/common/OutlinedButton";
import { typography, colors, breakpoints, loader } from "styles/theme";

type PersonItemProps = {
  name: string;
  jobTitle?: string;
  bio: any;
  image: StaticImageData;
  backgroundColor: string;
  expand?: boolean;
};

export const PersonItem: FC<PersonItemProps> = ({
  name,
  jobTitle = "",
  bio,
  image,
  backgroundColor,
  expand = false,
}) => {
  const [expanded, setExpanded] = useState(false);
  const { turquoise, mediumGrey, white, black } = colors;
  const { bodyLarge } = typography;
  const { ps, tl } = breakpoints;

  return (
    <Grid item>
      <Box
        sx={{
          backgroundColor,
          p: 6,
          pb: 0,
          [ps]: { p: 3, mt: 3 },
          [tl]: { p: 6, mt: 0 },
        }}
      >
        <Grid
          item
          container
          flexWrap="nowrap"
          spacing={4}
          sx={{
            flexDirection: "row",
            [ps]: { flexDirection: "column" },
            [tl]: { flexDirection: "row" },
          }}
        >
          <Grid
            item
            container
            direction="row"
            sx={{
              width: "50%",
              flexDirection: "row",
              [ps]: {
                width: "100%",
                flexDirection: "column",
              },
              [tl]: { width: "50%", flexDirection: "row" },
            }}
            flexWrap="nowrap"
            spacing={4}
          >
            <Grid item>
              <Box
                sx={{
                  mt: -10,
                  width: 120,
                  p: 1,
                  backgroundColor: white,
                  border: `1px solid ${mediumGrey}`,
                }}
              >
                <Image src={image} alt="" loader={loader} />
              </Box>
            </Grid>
            <Grid item container direction="column">
              {name}
              <Box
                sx={{
                  mt: 2,
                  "> p": { color: turquoise, mb: 0 },
                }}
              >
                {jobTitle}
              </Box>
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="column"
            sx={{
              width: "50%",
              [ps]: { width: "100%" },
              [tl]: { width: "50%" },
            }}
          >
            <Grid
              item
              sx={{
                borderTop: "none",
                [ps]: { borderTop: `1px solid ${mediumGrey}`, pt: 4 },
                [tl]: { borderTop: "none", pt: 0 },
              }}
            >
              {!expand && (
                <Box
                  sx={{
                    "> p": bodyLarge,
                    pb: 2,
                    minHeight: 250,
                  }}
                >
                  {bio}
                </Box>
              )}
              {expand && (
                <>
                  <Collapse in={expanded} collapsedSize={200}>
                    <Box
                      sx={{
                        "> p": bodyLarge,
                        pb: 2,
                      }}
                    >
                      {bio}
                    </Box>
                  </Collapse>
                  <Box sx={{ position: "relative" }}>
                    <Box
                      sx={{
                        position: "absolute",
                        top: -30,
                        width: "100%",
                        height: 30,
                        background: `linear-gradient(to bottom, ${backgroundColor}dd 0%, ${backgroundColor}ff 100%)`,
                      }}
                    />
                    <OutlinedButton
                      textColor={black}
                      arrowDirection={expanded ? "up" : "down"}
                      onClick={() => setExpanded(!expanded)}
                    >
                      {expanded ? "Less" : "More"}
                    </OutlinedButton>
                  </Box>
                </>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};
