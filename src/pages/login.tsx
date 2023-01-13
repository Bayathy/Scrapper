import { css, useTheme } from "@emotion/react";
import type { FC } from "react";

const Login: FC = () => {
  const theme = useTheme()
  return (
    <div css={css({background: theme.color.primary})}>
      <p css={css`c`}>Login Page</p>
    </div>
  );
};

export default Login;
