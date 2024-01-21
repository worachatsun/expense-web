import { FunctionComponent, useCallback, useMemo, useState } from "react";
import { Button } from "../../components/core/Button";
import { Table } from "../../components/core/Table";
import { Modal } from "../../components/core/Modal";
import { MODAL_TYPES } from "../../components/core/Modal/constants";
import { useModalContext } from "../../hooks/useModalContext";
import { ExpenseModalContent } from "./ExpenseModalContent";
import { RowProps } from "./types";

const Landing: FunctionComponent = () => {
  const { setIsOpen } = useModalContext();
  const [rows, setRows] = useState<RowProps[]>([
    {
      key: "default",
      cols: [
        <input type="checkbox" className="accent-pink-500" checked />,
        "Whiskers Cat food",
        "Food",
        "10$",
      ],
    },
  ]);

  const onUpdateRows = (row: RowProps) => {
    setRows((prevFormData) => [...prevFormData, row]);
  };

  const onAddExoenseClicked = useCallback(
    () => setIsOpen(true, MODAL_TYPES.ADD_EXPENSE),
    [setIsOpen]
  );

  const ExpenseTable = () =>
    useMemo(() => {
      const headers: string[] = ["", "Items", "Category", "Amount"];
      return <Table rows={rows} headers={headers} />;
    }, []);

  return (
    <>
      <h1 className="mb-6">CAT EXPENSE</h1>
      <ExpenseTable />
      <div className="flex justify-between mt-5">
        <Button onClick={onAddExoenseClicked}>Add Expense</Button>
        <Button>Delete Expense</Button>
      </div>
      <Modal modalIdentifier={MODAL_TYPES.ADD_EXPENSE}>
        {({ onCloseModal }) => (
          <ExpenseModalContent
            onCloseModal={onCloseModal}
            onAddRow={onUpdateRows}
          />
        )}
      </Modal>
    </>
  );
};

export default Landing;
