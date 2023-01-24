import React from "react";

import { StyledButton } from "./button";

import type { Meta, StoryObj } from "@storybook/react";


const meta: Meta<typeof StyledButton> = {
  title: "Button/StyledButton",
  component: StyledButton,
};

export default meta;

export const Default: StoryObj<typeof StyledButton> = {
  render: () => <StyledButton>Button</StyledButton>,
};
