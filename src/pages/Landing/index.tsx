import { FunctionComponent, useCallback, useMemo } from "react";
import { Button } from "../../components/core/Button";
import { Table } from "../../components/core/Table";
import { Modal } from "../../components/core/Modal";
import { MODAL_TYPES } from "../../components/core/Modal/constants";
import { useModalContext } from "../../hooks/useModalContext";
import { ExpenseModalContent } from "./ExpenseModalContent";

const Landing: FunctionComponent = () => {
  const { setIsOpen } = useModalContext();
  const onAddExoenseClicked = useCallback(
    () => setIsOpen(true, MODAL_TYPES.ADD_EXPENSE),
    [setIsOpen]
  );

  const ExpenseTable = () => useMemo(() => <Table />, []);

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
