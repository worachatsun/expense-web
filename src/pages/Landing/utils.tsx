import { ReactNode } from "react";
import { nanoid } from "nanoid";
import { FormProps, RowProps } from "./types";

export const mapRowData = (formData: FormProps) => {
  const cols: ReactNode[] = [
    <input type="checkbox" className="accent-pink-500" checked />,
  ];
  formData.amount = `${formData.amount}$`;

  Object.values(formData).map((value) => cols.push(value));
  const data: RowProps = {
    key: nanoid(),
    cols,
  };
  return data;
};
