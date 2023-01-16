import { composeStories } from "@storybook/testing-react";
import * as ButtonStories from "./button.stories";
import { render, screen, within } from "@testing-library/react";
import React from "react";
import { StyledButton } from "./button";

const { Default } = composeStories(ButtonStories);

describe("testing button component", () => {
  it("take snapshot", () => {
    const { asFragment } = render(<Default>Button</Default>);
    expect(asFragment()).toMatchSnapshot();
    screen.debug();
  });
  it("test children state", () => {
    render(<StyledButton>Button</StyledButton>);
    const buttonElement = screen.getByText("Button");
    expect(buttonElement).not.toBeNull();
  });
});
