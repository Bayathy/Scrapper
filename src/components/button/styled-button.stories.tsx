import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { StyledButton } from "./button";

const meta: Meta<typeof StyledButton> = {
  title: "Button/StyledButton",
  component: StyledButton,
};

export default meta;

export const Default: StoryObj<typeof StyledButton> = {
  render: () => <StyledButton>Button</StyledButton>,
};
