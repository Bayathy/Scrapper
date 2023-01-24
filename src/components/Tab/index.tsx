import type { FC } from "react";
import { useNavigate } from "react-router-dom";

import { css, useTheme } from "@emotion/react";

import { StyledButton } from "../button/button";

export type TabItemProps = {
  id: number;
  tabLabel: string;
  href: string;
};

export type TabsProps = { tabItems: Array<TabItemProps> };

export const Tabs: FC<TabsProps> = ({ tabItems }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <menu
      css={css`
        width: 100%;
        background: ${theme.color.primary};
      `}
    >
      <ul
        css={css`
          width: inherit;
          display: grid;
          grid-auto-flow: column;
          grid-template-columns: 1fr 1fr;
          list-style: none;
          gap: 1rem;
        `}
      >
        {tabItems.map(({ tabLabel, href, id }) => (
          <li key={id}>
            <StyledButton
              css={css`
                width: 100%;
                border-radius: 0px;
                background-color: inherit;
                color: white;
              `}
              onClick={() => navigate(href)}
            >
              {tabLabel}
            </StyledButton>
          </li>
        ))}
      </ul>
    </menu>
  );
};
