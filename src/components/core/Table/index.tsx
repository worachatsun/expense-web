import { FunctionComponent, ReactNode } from "react";
import { Th } from "./Th";
import { Td } from "./Td";
import { nanoid } from "nanoid";

interface Props {
  headers: string[];
  rows: { key: string; cols: ReactNode[] }[];
  onChecked: (key: string) => void;
  checkedList: Set<string>;
}

const Table: FunctionComponent<Props> = ({
  rows,
  headers,
  onChecked,
  checkedList,
}) => (
  <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          {headers.map((header) => (
            <Th key={header + nanoid()} scope="col">
              {header}
            </Th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map(({ key, cols }) => (
          <tr
            key={key}
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          >
            <Td>
              <input
                data-testid={key}
                type="checkbox"
                aria-checked={checkedList.has(key)}
                defaultChecked={checkedList.has(key)}
                onChange={() => onChecked(key)}
                className="accent-pink-500"
              />
            </Td>
            {cols.map((col) => (
              <Td key={col + nanoid()}>{col}</Td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export { Table };
