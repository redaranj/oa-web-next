import { FC } from "react";
import { Box } from "@mui/material";
import { colors, typography, breakpoints } from "styles/theme";
import { PageSection } from "components/common/PageSection";

export const ServeSection: FC = ({ children }) => {
  const { white, lightGrey, turquoise } = colors;
  const { bodyLarge } = typography;
  const { ps, tl, ds } = breakpoints;

  return (
    <PageSection backgroundColor={lightGrey}>
      <Box
        sx={{
          h5: { width: "50%" },
          ul: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            counterReset: "whoCounter",
          },
          li: {
            counterIncrement: "whoCounter",
            backgroundColor: white,
            display: "flex",
            p: 3,
            m: 3,
            width: "30%",
            [ps]: {
              width: "100%",
            },
            [tl]: {
              width: "50%",
            },
            [ds]: {
              width: "30%",
            },
          },
          "li::before": {
            ...bodyLarge,
            content: "counter(whoCounter, decimal-leading-zero)",
            color: turquoise,
            display: "block",
            width: "100%",
          },
        }}
      >
        {children}
      </Box>
    </PageSection>
  );
};
