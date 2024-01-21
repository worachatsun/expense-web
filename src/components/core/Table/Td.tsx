import { FunctionComponent, PropsWithChildren } from "react";

interface Props {}

export const Td: FunctionComponent<PropsWithChildren<Props>> = ({
  children,
}) => <td className="px-6 py-4">{children}</td>;
