import type { FC } from "react";

import { css, useTheme } from "@emotion/react";

import type { Component } from "../../types/components";

export type MenuCardProps = {
  title: string;
} & Component<"div">;

export const MenuCard: FC<MenuCardProps> = ({ title }) => {
  const theme = useTheme();
  return (
    <div
      css={css`
        padding-inline: 1rem;
        height: 4rem;
        border-color: ${theme.color.extra};
        border-style: solid;
        border-width: 0px 0px 3px 0px;
        :first-of-type {
          border-width: 3px 0px 3px 0px;
        }
      `}
    >
      <p
        css={css`
          font-size: 1.5rem;
        `}
      >
        {title}
      </p>
    </div>
  );
};
