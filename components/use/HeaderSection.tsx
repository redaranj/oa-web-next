import { FC } from "react";
import { Stack } from "@mui/material";
import { colors } from "styles/theme";
import { HeaderSection as BaseHeaderSection } from "components/common/HeaderSection";
import useCasesHeader from "public/images/use-cases-header.png";

export const HeaderSection: FC = ({ children }) => {
  const { white } = colors;

  return (
    <BaseHeaderSection backgroundColor={white} backgroundImage={useCasesHeader}>
      <Stack
        justifyContent="space-around"
        sx={{
          flexDirection: "column",
          "> h1": {
            color: white,
            textAlign: "center",
          },
        }}
      >
        {children}
      </Stack>
    </BaseHeaderSection>
  );
};
