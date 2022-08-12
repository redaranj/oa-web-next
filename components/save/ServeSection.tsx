import { FC } from "react";
import { Box, Stack } from "@mui/material";
import { colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";

export const ServeSection: FC = ({ children }) => {
  const { lightGrey } = colors;
  const [title, subtitle, ...rest] = children as any[];

  return (
    <PageSection backgroundColor={lightGrey}>
      <Box
        sx={{
          h5: { width: "50%", mb: 6 },
        }}
      >
        {title}
        {subtitle}
      </Box>
      <Stack
        sx={{
          ".serveItem:nth-of-type(even)": {
            flexDirection: "row-reverse",
          },
          ".serveItem:nth-of-type(odd)": {
            flexDirection: "row",
          },
        }}
      >
        {rest}
      </Stack>
    </PageSection>
  );
};
