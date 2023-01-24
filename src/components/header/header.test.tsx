import { composeStories } from "@storybook/testing-react";
import { render, screen } from "@testing-library/react";

import * as HeaderStories from "./header.stories";

const { Default } = composeStories(HeaderStories);

describe("testing Header component", () => {
  it("take snapshot", () => {
    const { asFragment } = render(<Default></Default>);
    expect(asFragment()).toMatchSnapshot();
    screen.debug();
  });
});