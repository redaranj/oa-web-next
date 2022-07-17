import { FC } from "react";
import { colors } from "styles/theme";
import { PersonItem } from "components/team/PersonItem";

export const BoardItem: FC = ({ children }) => {
  const { lightGrey } = colors;

  return <PersonItem backgroundColor={lightGrey}>{children}</PersonItem>;
};
