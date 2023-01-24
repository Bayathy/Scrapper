import { composeStories } from "@storybook/testing-react";
import { render, screen } from "@testing-library/react";

import * as ButtonStories from "./styled-button.stories";

const { Default } = composeStories(ButtonStories);

describe("testing button component", () => {
  it("take snapshot", () => {
    const { asFragment } = render(<Default>Button</Default>);
    expect(asFragment()).toMatchSnapshot();
    screen.debug();
  });
});
