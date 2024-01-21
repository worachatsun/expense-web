import { ReactNode } from "react";

export interface RowProps {
    key: string;
    checked: boolean;
    cols: ReactNode[];
}

export interface FormProps {
    item: string
    category: string
    amount: number | string
}