import { FC, PropsWithChildren } from "react";
import { Box, Stack } from "@mui/material";
import { colors, breakpoints } from "styles/theme";
import { PageSection } from "components/common/PageSection";

export const ServeSection: FC<PropsWithChildren> = ({ children }) => {
  const { lightGrey } = colors;
  const { ps, ts } = breakpoints;
  const [title, subtitle, ...rest] = children as any[];

  return (
    <PageSection backgroundColor={lightGrey}>
      <Box
        sx={{
          h5: {
            width: "50%",
            mb: 6,
            [ps]: { width: "100%" },
            [ts]: { width: "50%" },
          },
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
          [ps]: {
            ".serveItem:nth-of-type(even)": {
              flexDirection: "column",
            },
            ".serveItem:nth-of-type(odd)": {
              flexDirection: "column",
            },
          },
          [ts]: {
            ".serveItem:nth-of-type(even)": {
              flexDirection: "row-reverse",
            },
            ".serveItem:nth-of-type(odd)": {
              flexDirection: "row",
            },
          },
        }}
      >
        {rest}
      </Stack>
    </PageSection>
  );
};
