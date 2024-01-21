import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from ".";

describe("Button", () => {
  it("should render a button element with default styling and children", () => {
    render(<Button>Click me</Button>);
    const buttonElement = screen.getByTestId("button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass(
      "inline-flex justify-center bg-indigo-600 hover:bg-indigo-700 rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    );
    expect(buttonElement).toHaveTextContent("Click me");
  });

  it("should render button with default styles and no children", () => {
    const { getByTestId } = render(<Button />);
    expect(getByTestId("button")).toBeInTheDocument();
    expect(getByTestId("button")).toHaveClass(
      "inline-flex justify-center bg-indigo-600 hover:bg-indigo-700 rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    );
    expect(getByTestId("button")).toBeEmptyDOMElement();
  });

  it("should call the onClick function when the button is clicked", () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Click me</Button>);
    const buttonElement = screen.getByTestId("button");
    fireEvent.click(buttonElement);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
