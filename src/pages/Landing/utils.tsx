import { ReactNode } from "react";
import { nanoid } from "nanoid";
import { FormProps, RowProps } from "./types";

export const mapRowData = (formData: FormProps) => {
  const cols: ReactNode[] = [];
  formData.amount = `${formData.amount}$`;

  Object.values(formData).map((value) => cols.push(value));
  const data: RowProps = {
    key: nanoid(),
    checked: false,
    cols,
  };
  return data;
};
