import { FC } from "react";
import { colors } from "styles/theme";
import { PersonItem } from "components/team/PersonItem";
import { loadImage } from "lib/frontendHelpers";

export const BoardItem: FC = ({ children }) => {
  const { lightGrey } = colors;
  const [first, name, ...bio] = children as any[];
  const image = loadImage(first);

  return (
    <PersonItem
      name={name}
      bio={bio}
      image={image}
      backgroundColor={lightGrey}
    />
  );
};
