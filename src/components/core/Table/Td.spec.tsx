import { render, screen } from "@testing-library/react";
import { Td } from "./Td";

describe("Td", () => {
  it('should render td element with class "px-6 py-4"', () => {
    render(<Td />);
    const tdElement = screen.getByRole("cell");
    expect(tdElement).toHaveClass("px-6 py-4");
  });

  it("should render children inside td element", () => {
    render(<Td>Test</Td>);
    const tdElement = screen.getByRole("cell");
    expect(tdElement).toHaveTextContent("Test");
  });
});
