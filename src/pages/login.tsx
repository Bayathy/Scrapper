import { css, useTheme } from "@emotion/react";
import type { FC } from "react";
import { useNavigate } from "react-router";
import { StyledButton } from "../components/button/button";

const Login: FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <div
      css={css`
        min-height: 100vh;
        background: ${theme.color.primary};
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 5rem;
      `}
    >
      <p
        css={css`
          color: ${theme.color.secondary};
          font-size: 4rem;
        `}
      >
        Scrapper
      </p>
      <StyledButton onClick={() => navigate("/")}>Login</StyledButton>
    </div>
  );
};

export default Login;
