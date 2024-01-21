import { FormProps } from "./types";
import { mapRowData } from "./utils";

describe("mapRowData", () => {
  it("should return an object with key, checked and cols properties", () => {
    const formData: FormProps = {
      item: "item",
      category: "category",
      amount: 10,
    };

    const result = mapRowData(formData);

    expect(result).toHaveProperty("key");
    expect(result).toHaveProperty("checked", false);
    expect(result).toHaveProperty("cols");
  });

  it("should generate a string key using nanoid", () => {
    const formData: FormProps = {
      item: "item",
      category: "category",
      amount: 10,
    };

    const result = mapRowData(formData);

    expect(result.key).toBeDefined();
    expect(typeof result.key).toBe("string");
  });

  it("should set the checked property to false", () => {
    const formData: FormProps = {
      item: "item",
      category: "category",
      amount: 10,
    };

    const result = mapRowData(formData);

    expect(result.checked).toBe(false);
  });

  it("should handle empty formData object", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const formData: FormProps = {} as any;

    const result = mapRowData(formData);

    expect(result).toHaveProperty("key");
    expect(result).toHaveProperty("checked", false);
    expect(result).toHaveProperty("cols");
  });
});
