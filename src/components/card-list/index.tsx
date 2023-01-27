import type { FC } from "react";

import { css, useTheme } from "@emotion/react";

import { MenuCard } from "../card/menu-card";

export type MenuCardListProps = {
  cardList: Array<{ id: number; title: string }>;
};

export const MenuCardList: FC<MenuCardListProps> = ({ cardList }) => {
  const theme = useTheme();

  return (
    <ul>
      {cardList.map(({ title, id }) => (
        <li
          key={id}
          css={css`
            border-color: ${theme.color.extra};
            border-style: solid;
            border-width: 2px 0px 0px 0px;
            :last-of-type {
              border-width: 2px 0px;
            }
            :hover {
              border-width: 2px 0px;
              background: ${theme.color.extra};
              border-color: black;
            }
          `}
        >
          <MenuCard title={title} />
        </li>
      ))}
    </ul>
  );
};
