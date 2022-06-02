import { FC, PropsWithChildren } from "react";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors } from "styles/theme";

type JobItemProps = PropsWithChildren<{
  jobTitle: string;
  details: string;
  date: Date;
}>;

export const JobItem: FC<JobItemProps> = ({ jobTitle, details, date }) => {
  const t = useTranslate();
  const { white, turquoise } = colors;
  const { h5, body } = typography;
  console.log({ details });

  return (
    <Grid item sx={{ width: "50%" }}>
      <Box sx={{ backgroundColor: white, p: 4 }}>
        <Grid item container direction="column" spacing={4}>
          <Grid item>
            <Box sx={body}>{date.toLocaleDateString()}</Box>
            <Box sx={{ ...body, fontWeight: 700 }}>{t("jobOpening")}</Box>
          </Grid>
          <Grid item container>
            <Box component="p" sx={{ ...h5, color: turquoise }}>
              {jobTitle}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};
