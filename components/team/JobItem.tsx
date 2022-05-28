import { FC, PropsWithChildren } from "react";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography } from "styles/theme";

type JobItemProps = PropsWithChildren<{
  jobTitle: string;
  details: string;
  date: Date;
}>;

export const JobItem: FC<JobItemProps> = ({ jobTitle, details, date }) => {
  const t = useTranslate();
  const { bodyLarge } = typography;
  console.log({ details });

  return (
    <Grid item container direction="column" sx={{ width: "50%" }} spacing={4}>
      <Grid item>
        <Box>{date.toLocaleDateString()}</Box>
        <Box>{t("jobOpening")}</Box>
      </Grid>
      <Grid item container>
        <Box component="p" sx={bodyLarge}>
          {jobTitle}
        </Box>
      </Grid>
    </Grid>
  );
};
