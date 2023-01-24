import { composeStories } from "@storybook/testing-react";
import { render, screen } from "@testing-library/react";

import { StyledButton } from "./button";
import * as ButtonStories from "./styled-button.stories";

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
