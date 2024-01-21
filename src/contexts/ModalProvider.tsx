import { FunctionComponent, PropsWithChildren, useState } from "react";
import { MODAL_TYPES } from "../components/core/Modal/constants";
import { ModalContext } from "./ModalContext";

interface ModalState {
  [modalIdentifier: string]: boolean;
}

export const ModalProvider: FunctionComponent<PropsWithChildren> = (props) => {
  const [isOpen, setIsOpen] = useState<ModalState>({});
  const setModalState = (isOpen: boolean, modalIdentifier: MODAL_TYPES) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [modalIdentifier]: isOpen,
    }));
  };

  const getModalState = (modalIdentifier: MODAL_TYPES) =>
    isOpen[modalIdentifier] || false;

  return (
    <ModalContext.Provider
      value={{ isOpen: getModalState, setIsOpen: setModalState }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};
