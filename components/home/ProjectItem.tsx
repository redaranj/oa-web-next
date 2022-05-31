import { FC, PropsWithChildren } from "react";
import { StaticImageData } from "next/image";
import Link from "next/link";
import { Box, Grid } from "@mui/material";
import { colors, typography, breakpoints } from "styles/theme";

type ProjectItemProps = PropsWithChildren<{
  title: string;
  description?: string;
  image: StaticImageData;
  url: string;
}>;

export const ProjectItem: FC<ProjectItemProps> = ({
  title,
  description,
  image,
  url,
}) => {
  const { white, black, turquoise } = colors;
  const { h5, bodyLarge } = typography;
  const { phoneSmall, tabletSmall } = breakpoints;
  //  const containerRef = useRef(null);
  //  const [visible, setVisible] = useState(false);
  // ref={containerRef}
  // onMouseOver={() => setVisible(!visible)}

  return (
    <Grid
      item
      container
      direction="column"
      sx={{
        overflow: "hidden",
        width: "33%",
        [phoneSmall]: {
          width: "100%",
        },
        [tabletSmall]: {
          width: "33%",
        },
      }}
    >
      <Link href={url}>
        <Box
          sx={{
            backgroundColor: white,
            "&:hover #slide": {
              transition: "1s",
              bottom: "0px",
            },
            position: "relative",
          }}
        >
          <Grid item container direction="row" justifyContent="space-between">
            <Grid item>
              <Box component="h5" sx={{ ...h5, color: black, p: 3 }}>
                {title}
              </Box>
            </Grid>
            <Grid item />
          </Grid>
          <Grid item>
            <Box
              sx={{
                height: "400px",
                backgroundImage: `url(${image.src})`,
                backgroundSize: "cover",
              }}
            >
              <Box
                id="slide"
                sx={{
                  width: "100%",
                  backgroundColor: turquoise,
                  color: white,
                  height: "300px",
                  position: "absolute",
                  bottom: "-300px",
                  transition: "1s",
                }}
              >
                <Box sx={{ ...bodyLarge, color: white }}>{description}</Box>
              </Box>
            </Box>
          </Grid>
        </Box>
      </Link>
    </Grid>
  );
};
