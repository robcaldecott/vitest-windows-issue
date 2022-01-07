import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Logo } from "./Logo";

it("renders", () => {
  render(<Logo width={200} fill="#3C576B" />);
  expect(
    screen.getByRole("img", { name: /keyloop logo/i })
  ).toBeInTheDocument();
});
