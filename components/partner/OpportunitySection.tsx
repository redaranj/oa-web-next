import { FC } from "react";
import { Stack } from "@mui/material";
import { colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";

export const OpportunitySection: FC = ({ children }) => {
  const { lightGrey } = colors;

  return (
    <PageSection backgroundColor={lightGrey}>
      <Stack
        sx={{
          ".opportunityItem:nth-of-type(even)": {
            flexDirection: "row-reverse",
          },
          ".opportunityItem:nth-of-type(odd)": {
            flexDirection: "row",
          },
        }}
      >
        {children}
      </Stack>
    </PageSection>
  );
};
