import { render, screen } from "@testing-library/react";
import Input from "./Input";

describe("Input", () => {
  it.skip("renders a label and an input with a placeholder", () => {
    render(<Input labelText="labeltest" placeholder="write here email" name="email" />);

    const inputInput = screen.getByLabelText("labeltest");

    expect(inputInput).toHaveAttribute("placeholder", "write here email");
  });

  // Hint:
  // 1. Use placeholder and name attribute for your expectations
  // 2. Check out the matcher toHaveAttribute (https://github.com/testing-library/jest-dom#tohaveattribute)
});
