import { FC } from "react";
import { colors } from "styles/theme";
import { HeaderSection as BaseHeaderSection } from "components/common/HeaderSection";

export const JobHeaderSection: FC = ({ children }) => {
  const { lightGrey } = colors;

  return (
    <BaseHeaderSection backgroundColor={lightGrey}>
      {children}
    </BaseHeaderSection>
  );
};
