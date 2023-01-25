import { Tabs } from ".";

import type { TabItemProps } from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Tabs> = {
  title: "Tab",
  component: Tabs,
};

export default meta;

const tabProps: TabItemProps[] = [
  { tabLabel: "Tab1", href: "/", id: 1 },
  { tabLabel: "Tab2", href: "/", id: 2 },
];

export const Default: StoryObj<typeof Tabs> = {
  render: () => <Tabs tabItems={tabProps} />,
};
