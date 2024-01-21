import { render, screen } from "@testing-library/react";
import { Loading } from ".";

describe("Loading", () => {
  it("should render a loading spinner with appropriate dimensions and colors", () => {
    render(<Loading />);
    const spinner = screen.getByRole("status");
    expect(spinner).toBeInTheDocument();
  });
});
