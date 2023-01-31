import type { FC } from "react";

import { css, Global } from "@emotion/react";

export const GlobalStyles: FC = () => {
  return (
    <Global
      styles={css`
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }
        body {
          min-height: 100vh;
        }

        .ProseMirror:focus {
          outline: none;
        }
      `}
    />
  );
};
