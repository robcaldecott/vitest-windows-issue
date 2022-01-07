import { it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as stories from "./Example.stories";

const { Default } = composeStories(stories);

it("renders", () => {
  render(<Default />);
  expect(
    screen.getByRole("heading", { name: /hello, world!/i, level: 1 })
  ).toBeDefined();
});
