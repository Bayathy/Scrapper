import styled from "@emotion/styled"

import type { FC } from "react";
import type { Component } from "../../types/components";

export type ButtonProps = Component<"button">;

const StyledButton = styled.button

export const Button: FC<ButtonProps> = ({ children, css }) => {
  return (
    <button
      css={css}
    >
      {children}
    </button>
  );
};
