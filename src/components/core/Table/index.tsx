import { FunctionComponent, ReactNode } from "react";
import { Th } from "./Th";
import { Td } from "./Td";

const headers: string[] = ["", "Items", "Category", "Amount"];
const items: ReactNode[] = [
  <input type="checkbox" className="accent-pink-500" checked />,
  "Whiskers Cat food",
  "Food",
  "10$",
];

const Table: FunctionComponent = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {headers.map((header) => (
              <Th scope="col">{header}</Th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            {items.map((item) => (
              <Td>{item}</Td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export { Table };
