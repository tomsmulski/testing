import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navigation from "./Navigation";

describe("Navigation", () => {
  it.skip("renders a navigation with two links", () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    const navLink1 = screen.getByRole("link", { name: "Play" });
    const navLink2 = screen.getByRole("link", { name: "History" });

    expect(navLink1).toBeInTheDocument();
    expect(navLink2).toBeInTheDocument();
  });

  // Hints:
  // 1. You need to wrap your Navigation in a MemoryRouter component.
  // 2. Use the role "link" with their corresponding names to find them
});
