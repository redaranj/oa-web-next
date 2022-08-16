import { FC } from "react";
import { useRouter } from "next/router";
import { Box } from "@mui/material";
import { colors, typography } from "styles/theme";
import { FilledButton } from "components/common/FilledButton";

export const ContactBox: FC = () => {
  const router = useRouter();
  const { lightTurquoise, lightGrey, white, black } = colors;
  const { h5, bodyLarge } = typography;

  return (
    <Box
      sx={{
        pt: 6,
        mb: 6,
        background: `linear-gradient(to bottom, ${white} 50%, ${lightGrey} 50%)`,
      }}
    >
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
        <Box sx={bodyLarge}>
          We will consider applications on a rolling basis.
        </Box>
        <FilledButton
          backgroundColor={white}
          textColor={black}
          onClick={() => router.push("mailto:info@open-archive.org")}
        >
          Submit
        </FilledButton>
      </Box>
    </Box>
  );
};
