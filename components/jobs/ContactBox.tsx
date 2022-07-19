import { FC } from "react";
import { Box } from "@mui/material";
import { colors, typography } from "styles/theme";
import { FilledButton } from "components/common/FilledButton";

export const ContactBox: FC = () => {
  const { lightTurquoise, white, black } = colors;
  const { h5, body } = typography;

  return (
    <Box
      sx={{
        backgroundColor: lightTurquoise,
        p: 3,
        maxWidth: 600,
        margin: "0 auto",
        textAlign: "center",
        z: 1000,
      }}
    >
      <Box sx={h5}>
        Please submit your application directly to: jobs[at]open-archive.org
      </Box>
      <Box sx={body}>We will consider applications on a rolling basis.</Box>
      <FilledButton backgroundColor={white} textColor={black}>
        Submit
      </FilledButton>
    </Box>
  );
};
