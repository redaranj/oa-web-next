import { FC, PropsWithChildren } from "react";
import { colors } from "styles/theme";
import { PersonItem } from "components/team/PersonItem";
import { loadImage } from "lib/frontendHelpers";

type BoardItemProps = PropsWithChildren<{
  expand?: boolean;
}>;

export const BoardItem: FC<BoardItemProps> = ({ expand = false, children }) => {
  const { lightGrey } = colors;
  const [first, name, ...bio] = children as any[];
  const image = loadImage(first);

  return (
    <PersonItem
      name={name}
      bio={bio}
      image={image}
      backgroundColor={lightGrey}
      expand={expand}
    />
  );
};
