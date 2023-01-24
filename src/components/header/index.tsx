import type { FC } from "react";
import { css, useTheme } from "@emotion/react";
import { IconButton } from "../button/button";
import { Icon } from "@iconify/react";

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
          height: 100%;
          display: flex;
          align-items: center;
          margin: auto;
          padding-inline: 16px;
          justify-content: end;
          align-content: center;
        `}
      >
        <IconButton imageSrc="https://images.ctfassets.net/hrltx12pl8hq/01rJn4TormMsGQs1ZRIpzX/02e9885a9ae69312da844bc58eedced1/Artboard_Copy_22.png?fit=fill&w=600&h=400" />
      </div>
    </header>
  );
};
