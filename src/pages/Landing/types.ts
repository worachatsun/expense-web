import { ReactNode } from "react";

export interface RowProps {
    key: string;
    cols: ReactNode[];
}

export interface FormProps {
    item: string
    category: string
    amount: number | string
}