import { TextEditor } from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TextEditor> = {
  title: "TextEditor",
  component: TextEditor,
};

export default meta;

export const Default: StoryObj<typeof TextEditor> = {
  render: () => <TextEditor />,
};
