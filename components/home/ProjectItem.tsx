import { FC, PropsWithChildren } from "react";
import { StaticImageData } from "next/image";
import Link from "next/link";
import { Box, Grid } from "@mui/material";
import { colors, typography } from "styles/theme";

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
  const { white, black } = colors;
  const { h5, bodyLarge } = typography;

  return (
    <Grid item container direction="column" sx={{ width: "33%" }}>
      <Link href={url}>
        <Box sx={{ backgroundColor: white }}>
          <Grid item>
            <Box component="h5" sx={{ ...h5, color: black }}>
              {title}
            </Box>
          </Grid>
          <Grid item>
            <Box
              sx={{
                height: "400px",
                backgroundImage: `url(${image.src})`,
                backgroundSize: "cover",
              }}
            >
              <Box sx={{ ...bodyLarge, color: white }}>{description}</Box>
            </Box>
          </Grid>
        </Box>
      </Link>
    </Grid>
  );
};
