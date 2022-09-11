import { FC, PropsWithChildren } from "react";
import { Stack } from "@mui/material";
import { colors, breakpoints } from "styles/theme";
import { PageSection } from "components/common/PageSection";

export const OpportunitySection: FC<PropsWithChildren> = ({ children }) => {
  const { white, lightGrey } = colors;
  const { ps, ts } = breakpoints;

  return (
    <PageSection backgroundColor={lightGrey}>
      <Stack
        sx={{
          ".opportunityItem:nth-of-type(even)": {
            flexDirection: "row-reverse",
            backgroundColor: white,
          },
          ".opportunityItem:nth-of-type(odd)": {
            flexDirection: "row",
          },
          [ps]: {
            ".opportunityItem:nth-of-type(even)": {
              flexDirection: "column",
            },
            ".opportunityItem:nth-of-type(odd)": {
              flexDirection: "column",
            },
          },
          [ts]: {
            ".opportunityItem:nth-of-type(even)": {
              flexDirection: "row-reverse",
            },
            ".opportunityItem:nth-of-type(odd)": {
              flexDirection: "row",
            },
          },
        }}
      >
        {children}
      </Stack>
    </PageSection>
  );
};
