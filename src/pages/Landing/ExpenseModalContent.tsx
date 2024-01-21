import { FunctionComponent, useCallback, useState } from "react";
import { Input, Select } from "../../components/core/Input";
import { useFatchFact } from "../../hooks/useFetchFact";
import { Loading } from "../../components/core/Loading";
import { FormProps, RowProps } from "./types";
import { mapRowData } from "./utils";

interface Props {
  onCloseModal: () => void;
  onAddRow: (row: RowProps) => void;
}

const options = [
  { title: "Food", value: "Food" },
  { title: "Health", value: "Health" },
  { title: "Travel", value: "Travel" },
  { title: "Shopping", value: "Shopping" },
];

export const ExpenseModalContent: FunctionComponent<Props> = ({
  onCloseModal,
  onAddRow,
}) => {
  const { data, isLoading } = useFatchFact();
  const [formData, setFormData] = useState<FormProps>({
    item: "",
    category: "Food",
    amount: 0,
  });

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = event.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    },
    []
  );

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAddRow(mapRowData(formData));
    onCloseModal();
  };

  return (
    <div
      data-testid="modal"
      className="relative p-4 w-full max-w-2xl max-h-full"
    >
      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <div className="flex justify-between p-4 md:p-5 space-y-4 w-full">
          <div className="w-6/12">
            <form onSubmit={onSubmit}>
              <Input
                title="Item:"
                type="text"
                placeholder="Item Name"
                onChange={handleInputChange}
                name="item"
                required
              />
              <Select
                title="Category:"
                options={options}
                placeholder="Choose a category"
                onChange={handleInputChange}
                name="category"
                required
              />
              <Input
                title="Amount:"
                type="number"
                placeholder="Item amount"
                onChange={handleInputChange}
                name="amount"
                required
              />
              <div className="flex justify-between items-center p-4 md:p-5 border-gray-200 rounded-b dark:border-gray-600">
                <button
                  data-modal-hide="static-modal"
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
                <button
                  data-modal-hide="static-modal"
                  type="button"
                  onClick={onCloseModal}
                  className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
          <div className="flex justify-center items-center w-5/12">
            {isLoading ? (
              <Loading />
            ) : (
              <p
                data-testid="cat-fact"
                className="text-base leading-relaxed text-gray-500 dark:text-gray-400"
              >
                Random cat fact: {data?.fact}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
