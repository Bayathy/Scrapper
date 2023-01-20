import styled from "@emotion/styled";
import type { FC } from "react";
import { Component } from "../../types/components";
import { css } from "@emotion/react";

export type IconButtonProps = {
  imageSrc: string;
} & Component<"button">;

export const StyledButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 0.5rem 2rem;
  background: white;
  border-radius: 20px;
  :hover {
    background-color: gray;
  }
`;

export const IconButton: FC<IconButtonProps> = ({
  cx,
  imageSrc,
  onClick,
  ...rest
}) => {
  return (
    <button
      onClick={onClick}
      {...rest}
      css={[
        css`
          border-radius: 999px;
        `,
        cx,
      ]}
    >
      <img src={imageSrc} alt="your Icon" />
    </button>
  );
};
