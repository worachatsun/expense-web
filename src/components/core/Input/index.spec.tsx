import { fireEvent, render, screen } from "@testing-library/react";
import { Input, Props, Select } from ".";

describe("Input", () => {
  it("should render an input element with the specified type, placeholder, and name", () => {
    const props: Props = {
      type: "text",
      title: "Test Input",
      required: true,
      aria: "input-description",
      htmlFor: "input-id",
      placeholder: "Enter text",
      onChange: vi.fn(),
      name: "test-input",
    };

    render(<Input {...props} />);
    expect(screen.getByLabelText("Test Input")).toBeInTheDocument();
    expect(screen.getByLabelText("Test Input")).toHaveAttribute("type", "text");
    expect(screen.getByLabelText("Test Input")).toHaveAttribute(
      "placeholder",
      "Enter text"
    );
    expect(screen.getByLabelText("Test Input")).toHaveAttribute(
      "name",
      "test-input"
    );
  });

  it("should call onChange function when input value changes", () => {
    const handleChange = vi.fn();
    render(
      <Input
        type="text"
        title="Test Input"
        name="test"
        onChange={handleChange}
      />
    );
    const inputElement = screen.getByRole("textbox");
    console.log(inputElement);
    fireEvent.change(inputElement, { target: { value: "test" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});

describe("Select", () => {
  it("should render a label with the provided title prop", () => {
    const title = "Test Title";
    const htmlFor = "test-id";
    const options = [{ title: "Option 1", value: "option1" }];
    const onChange = vi.fn();
    const name = "test-name";
    const required = true;
    render(
      <Select
        htmlFor={htmlFor}
        title={title}
        options={options}
        onChange={onChange}
        name={name}
        required={required}
      />
    );

    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it("should render a select element with the provided options prop", () => {
    const title = "Test Title";
    const htmlFor = "test-id";
    const options = [
      { title: "Option 1", value: "option1" },
      { title: "Option 2", value: "option2" },
    ];
    const onChange = vi.fn();
    const name = "test-name";
    const required = true;
    render(
      <Select
        htmlFor={htmlFor}
        title={title}
        options={options}
        onChange={onChange}
        name={name}
        required={required}
      />
    );
    options.forEach((option) => {
      expect(screen.getByText(option.title)).toBeInTheDocument();
    });
  });
});
