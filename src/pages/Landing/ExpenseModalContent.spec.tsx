import { fireEvent, render, screen } from "@testing-library/react";
import { ExpenseModalContent } from "./ExpenseModalContent";
import { useFatchFact } from "../../hooks/useFetchFact";

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

describe("ExpenseModalContent", () => {
  it("should render a form with three input fields and two buttons", () => {
    render(<ExpenseModalContent onCloseModal={vi.fn()} onAddRow={vi.fn()} />);

    const itemInput = screen.getByTestId("Item:");
    const categoryInput = screen.getByTestId("Category:");
    const amountInput = screen.getByTestId("Amount:");
    const submitButton = screen.getByRole("button", { name: "Submit" });
    const cancelButton = screen.getByRole("button", { name: "Cancel" });

    expect(itemInput).toBeInTheDocument();
    expect(categoryInput).toBeInTheDocument();
    expect(amountInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
  });

  it("should allow user to input item name, category, and amount", () => {
    render(<ExpenseModalContent onCloseModal={vi.fn()} onAddRow={vi.fn()} />);

    const itemInput = screen.getByTestId("Item:");
    const categoryInput = screen.getByTestId("Category:");
    const amountInput = screen.getByTestId("Amount:");

    fireEvent.change(itemInput, { target: { value: "Item Name" } });
    fireEvent.change(categoryInput, { target: { value: "Food" } });
    fireEvent.change(amountInput, { target: { value: "10" } });

    expect(itemInput.value).toBe("Item Name");
    expect(categoryInput.value).toBe("Food");
    expect(amountInput.value).toBe("10");
  });

  it("should display a random cat fact while waiting for form submission", async () => {
    const mockFact = "This is a random cat fact";
    useFatchFact.mockReturnValue({
      data: { fact: mockFact },
      isLoading: false,
    });
    render(<ExpenseModalContent onCloseModal={vi.fn()} onAddRow={vi.fn()} />);

    const catFact = await screen.findByText(`Random cat fact: ${mockFact}`);
    expect(catFact).toBeInTheDocument();
  });
});
