import React from "react";

import { Header } from "./";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Header> = {
  title: "Header",
  component: Header,
};

export default meta;

export const Default: StoryObj<typeof Header> = {
  render: () => <Header />,
};
