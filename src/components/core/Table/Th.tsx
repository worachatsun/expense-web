import { FunctionComponent, PropsWithChildren } from "react";

interface Props {
  scope: "col" | "row";
}

export const Th: FunctionComponent<PropsWithChildren<Props>> = ({
  children,
  scope,
}) => (
  <th scope={scope} className="px-6 py-3">
    {children}
  </th>
);
