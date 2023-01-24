import { IconButton } from "./button";

import type { IconButtonProps } from "./button";
import type { Meta, StoryObj } from "@storybook/react";


const meta: Meta<IconButtonProps> = {
  title: "Button/IconButton",
  component: IconButton,
};

export default meta;

export const Default: StoryObj<IconButtonProps> = {
  render: () => (
    <IconButton imageSrc="https://images.ctfassets.net/hrltx12pl8hq/01rJn4TormMsGQs1ZRIpzX/02e9885a9ae69312da844bc58eedced1/Artboard_Copy_22.png?fit=fill&w=600&h=400" />
  ),
};
