import { fireEvent, render, screen } from "@testing-library/react";
import Landing from ".";
import { ModalProvider } from "../../contexts/ModalProvider";

vi.mock("../../hooks/useFetchFact", () => {
  return {
    useFatchFact: vi.fn().mockImplementation(() => ({
      isLoading: false,
      data: {
        fact: "Random cat fact",
      },
    })),
  };
});

describe("Landing", () => {
  it("should render a table with default row and headers", () => {
    render(<Landing />);
    const table = screen.getByRole("table");
    const headers = screen.getAllByRole("columnheader");

    expect(table).toBeInTheDocument();
    expect(headers).toHaveLength(4);
  });

  it('should open a modal when "Add Expense" button is clicked', () => {
    render(
      <ModalProvider>
        <Landing />
      </ModalProvider>
    );
    const addButton = screen.getByText("Add Expense");
    fireEvent.click(addButton);
    const modal = screen.getByTestId("modal");

    expect(modal).toBeInTheDocument();
  });

  it("should add a new row to the table when form in the modal is submitted", () => {
    render(
      <ModalProvider>
        <Landing />
      </ModalProvider>
    );
    const addButton = screen.getByText("Add Expense");
    fireEvent.click(addButton);
    const itemInput = screen.getByTestId("Item:");
    const categoryInput = screen.getByTestId("Category:");
    const amountInput = screen.getByTestId("Amount:");
    const submitButton = screen.getByText("Submit");

    fireEvent.change(itemInput, { target: { value: "New Item" } });
    fireEvent.change(categoryInput, { target: { value: "Food" } });
    fireEvent.change(amountInput, { target: { value: "10" } });
    fireEvent.click(submitButton);

    const newRow = screen.getByText("New Item");

    expect(newRow).toBeInTheDocument();
  });

  it("should not add a new row to the table when form in the modal is submitted with empty fields", () => {
    render(
      <ModalProvider>
        <Landing />
      </ModalProvider>
    );
    const addButton = screen.getByText("Add Expense");
    fireEvent.click(addButton);
    const submitButton = screen.getByText("Submit");

    fireEvent.click(submitButton);

    const newRow = screen.queryByText("New Item");

    expect(newRow).not.toBeInTheDocument();
  });

  it('should not remove any rows when "Delete Expense" button is clicked with no selected rows', () => {
    render(
      <ModalProvider>
        <Landing />
      </ModalProvider>
    );
    const deleteButton = screen.getByText("Delete Expense");
    fireEvent.click(deleteButton);

    const row = screen.getByText("Whiskers Cat food");

    expect(row).toBeInTheDocument();
  });

  it('should not open another modal when "Add Expense" button is clicked while the modal is open', () => {
    render(
      <ModalProvider>
        <Landing />
      </ModalProvider>
    );
    const addButton = screen.getByText("Add Expense");
    fireEvent.click(addButton);
    fireEvent.click(addButton);

    const modals = screen.getAllByTestId("modal");

    expect(modals).toHaveLength(1);
  });
});
