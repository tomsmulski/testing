import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Player from "./Player";

describe("Player", () => {
  it("renders player information and two buttons", () => {
    render(<Player name="John" score="2" />);

    const buttons = screen.getAllByRole("button");
    const name = screen.getByText(/john/i);
    const score = screen.getByText(/2/i);

    expect(buttons).toHaveLength(2);
    expect(name).toBeInTheDocument();
    expect(score).toBeInTheDocument();

  });

  it.skip("calls callbacks when increasing or decreasing score", ()=>{
    const decreaseCallback = jest.fn();
    const increaseCallback = jest.fn();
    render(
      <Player
        name="John"
        score="2"
        onDecreasePlayerScore={decreaseCallback}
        onIncreasePlayerScore={increaseCallback}
      />
    );

    const increaseButton = screen.getByRole("button", {
      name: /increase score/i
    });
    const decreaseButton = screen.getByRole("button", {
      name: /decrease score/i
    });

    userEvent.click(increaseButton);
    userEvent.click(increaseButton);
    userEvent.click(decreaseButton);

    expect(decreaseCallback).toHaveBeenCalledTimes(1);
    expect(increaseCallback).toHaveBeenCalledTimes(2);
  });
  // Hints:
  // 1. You need to mock the functions handed down as prop
  // to your Player component.
  // 2. Make sure to execute the click event.
  // 3. Check for the callback via toHaveBeenCalledTimes (https://jestjs.io/docs/expect#tohavebeencalledtimesnumber)
});
