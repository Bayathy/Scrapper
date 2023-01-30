import type { FC } from "react";

import { css } from "@emotion/react";

import type { Component } from "../../types/components";

export type MenuCardProps = {
  title: string;
} & Component<"div">;

export const MenuCard: FC<MenuCardProps> = ({ title }) => {
  return (
    <div
      css={css`
        padding-inline: 1rem;
        padding-top: 0.2rem;
        height: 4rem;
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
