import { FunctionComponent, useCallback, useMemo } from "react";
import { Button } from "../../components/core/Button";
import { Table } from "../../components/core/Table";
import { Modal } from "../../components/core/Modal";
import { MODAL_TYPES } from "../../components/core/Modal/constants";
import { useModalContext } from "../../hooks/useModalContext";
import { ExpenseModalContent } from "./ExpenseModalContent";

export interface RowProps {
  key: string;
  checkbox: JSX.Element;
  item: string;
  category: string;
  amount: string;
}

const Landing: FunctionComponent = () => {
  const { setIsOpen } = useModalContext();
  const onAddExoenseClicked = useCallback(
    () => setIsOpen(true, MODAL_TYPES.ADD_EXPENSE),
    [setIsOpen]
  );

  const ExpenseTable = () =>
    useMemo(() => {
      const headers: string[] = ["", "Items", "Category", "Amount"];
      const rows = [
        {
          key: "checkbox",
          cols: [
            <input type="checkbox" className="accent-pink-500" checked />,
            "Whiskers Cat food",
            "Food",
            "10$",
          ],
        },
        {
          key: "checkbox",
          cols: [
            <input type="checkbox" className="accent-pink-500" checked />,
            "Whiskers Cat food",
            "Food",
            "10$",
          ],
        },
      ];
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
          <ExpenseModalContent onCloseModal={onCloseModal} />
        )}
      </Modal>
    </>
  );
};

export default Landing;
