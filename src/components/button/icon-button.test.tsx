import { composeStories } from "@storybook/testing-react";
import * as ButtonStories from "./styled-button.stories";
import { render, screen, within } from "@testing-library/react";
import React from "react";
import { IconButton } from "./button";

const { Default } = composeStories(ButtonStories);

describe("testing button component", () => {
  it("take snapshot", () => {
    const { asFragment } = render(<Default>Button</Default>);
    expect(asFragment()).toMatchSnapshot();
    screen.debug();
  });
});
