import { FunctionComponent, PropsWithChildren } from "react";

interface Props {
  onClick?: () => void;
  isLoading?: boolean;
  style?: "default" | "outline" | "no-background";
  icon?: string;
}

const Button: FunctionComponent<PropsWithChildren<Props>> = (props) => (
  <button
    data-testid="button"
    type="button"
    className={
      "inline-flex justify-center bg-indigo-600 hover:bg-indigo-700 rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    }
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

export { Button };
