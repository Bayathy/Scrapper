import { MenuCardList } from ".";

import type { MenuCardListProps } from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<MenuCardListProps> = {
  title: "List/MenuCardList",
  component: MenuCardList,
};

export default meta;

export const Default: StoryObj<MenuCardListProps> = {
  render: () => (
    <MenuCardList
      cardList={[
        { id: 1, title: "title1" },
        { id: 2, title: "タイトル１" },
        { id: 3, title: "〇〇をしてみたい" },
      ]}
    />
  ),
};
