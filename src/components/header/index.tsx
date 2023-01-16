import type { FC } from "react";
import { css, useTheme } from "@emotion/react";
import { StyledButton } from "../button/button";

export const Header: FC = () => {
  const theme = useTheme();

  return (
    <header
      css={css`
        height: 4rem;
        width: 100vw;
        background: ${theme.color.primary};
      `}
    >
      <div
        css={css`
          margin: auto;
        `}
      ></div>
    </header>
  );
};
