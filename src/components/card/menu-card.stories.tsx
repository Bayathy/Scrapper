import React from "react";

import { MenuCard } from "./menu-card";

import type { MenuCardProps } from "./menu-card";
import type { StoryObj, Meta } from "@storybook/react";

const meta: Meta<MenuCardProps> = {
  title: "Card/MenuCard",
  component: MenuCard,
};

export default meta;

export const Default: StoryObj<MenuCardProps> = {
  render: () => <MenuCard title="text" />,
};
