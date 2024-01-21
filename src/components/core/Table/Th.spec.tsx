import { render, screen } from "@testing-library/react";
import { Th } from "./Th";

describe("Th", () => {
  it("should render a <th> element with the given scope and children", () => {
    render(<Th scope="col">Test</Th>);
    const thElement = screen.getByRole("columnheader", { name: /Test/i });
    expect(thElement).toBeInTheDocument();
    expect(thElement).toHaveAttribute("scope", "col");
  });
});
