import { render, screen } from "@testing-library/react";
import { Table } from ".";

describe("Table", () => {
  it("should render a table with headers and rows", () => {
    const headers = ["Header 1", "Header 2", "Header 3"];
    const rows = [
      { key: "1", cols: ["Row 1 Col 1", "Row 1 Col 2", "Row 1 Col 3"] },
      { key: "2", cols: ["Row 2 Col 1", "Row 2 Col 2", "Row 2 Col 3"] },
      { key: "3", cols: ["Row 3 Col 1", "Row 3 Col 2", "Row 3 Col 3"] },
    ];
    const onChecked = vi.fn();
    const checkedList = new Set();

    render(
      <Table
        headers={headers}
        rows={rows}
        onChecked={onChecked}
        checkedList={checkedList}
      />
    );

    const expectedTexts = [
      "Header 1",
      "Header 2",
      "Header 3",
      "Row 1 Col 1",
      "Row 1 Col 2",
      "Row 1 Col 3",
      "Row 2 Col 1",
      "Row 2 Col 2",
      "Row 2 Col 3",
      "Row 3 Col 1",
      "Row 3 Col 2",
      "Row 3 Col 3",
    ];

    const elements = expectedTexts.map((text) => screen.getByText(text));

    elements.forEach((element) => expect(element).toBeInTheDocument());
  });

  it("should check the checkbox if the row's key is in the checkedList", () => {
    const headers = ["Header 1", "Header 2", "Header 3"];
    const rows = [
      { key: "1", cols: ["Row 1 Col 1", "Row 1 Col 2", "Row 1 Col 3"] },
      { key: "2", cols: ["Row 2 Col 1", "Row 2 Col 2", "Row 2 Col 3"] },
      { key: "3", cols: ["Row 3 Col 1", "Row 3 Col 2", "Row 3 Col 3"] },
    ];
    const onChecked = vi.fn();
    const checkedList = new Set(["2"]);

    render(
      <Table
        headers={headers}
        rows={rows}
        onChecked={onChecked}
        checkedList={checkedList}
      />
    );

    expect(screen.getByTestId("1")).not.toBeChecked();
    expect(screen.getByTestId("2")).toBeChecked();
    expect(screen.getByTestId("3")).not.toBeChecked();
  });
});
