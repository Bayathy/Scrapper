import styled from "@emotion/styled";
import type { FC } from "react";
import { Component } from "../../types/components";
import { css, keyframes, useTheme } from "@emotion/react";

export type IconButtonProps = {
  imageSrc?: string;
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
  const theme = useTheme()

  const bounce = keyframes`
  from {
    outline: 0px solid ${theme.color.secondary};
    outline-offset: -4px;
  }
  to {
    outline: 4px solid ${theme.color.secondary};
    outline-offset: -4px;
  }
`;

  return (
    <button
      onClick={onClick}
      {...rest}
      css={[
        css`
          box-sizing: border-box;
          border: none;
          background: none;
          width: 3rem;
          height: 3rem;
          border-radius: 999px;
          padding: 0;
          :hover {
            animation: ${bounce} 0.2s;
            outline: 4px solid ${theme.color.secondary};
            outline-offset: -4px;
          }
        `,
        cx,
      ]}
    >
      <img
        css={css`
          width: inherit;
          aspect-ratio: 1/1;
          border-radius: 999px;
        `}
        src={imageSrc ?? ""}
        alt="your Icon"
      />
    </button>
  );
};
