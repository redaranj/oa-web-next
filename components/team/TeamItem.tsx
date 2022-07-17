import { FC } from "react";
import { colors } from "styles/theme";
import { PersonItem } from "components/team/PersonItem";

export const TeamItem: FC = ({ children }) => {
  const { white } = colors;

  return <PersonItem backgroundColor={white}>{children}</PersonItem>;
};
