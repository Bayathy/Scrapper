import * as stories from "./button.stories";
import React from "react";
import { composeStories } from "@storybook/testing-react";
import { render, screen } from "@testing-library/react";

describe("Button", () => {
  const { Primary } = composeStories(stories);
  test("test toMatchSnapShot", () => {
    const { asFragment } = render(<Primary />);
    expect(asFragment()).toMatchSnapshot();
    screen.debug();
  });
});
