import { Tabs } from "."

import type { Meta, StoryObj } from "@storybook/react"

const meta : Meta<typeof Tabs> = {
    title: "Tab",
    component: Tabs
}

export default meta

export const Default:StoryObj<typeof Tabs> = {
    render: () => <Tabs/>
} 