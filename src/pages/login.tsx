import { css, useTheme } from "@emotion/react";
import type { FC } from "react";

const Login: FC = () => {
  const theme = useTheme();
  return (
    <div
      css={css`
        min-height: 100vh;
        background: ${theme.color.primary};
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 2rem;
      `}
    >
      <p
        css={css`
          color: ${theme.color.secondary};
          font-size: 3rem;
        `}
      >
        Scrapper
      </p>
      <button>ログイン</button>
    </div>
  );
};

export default Login;
