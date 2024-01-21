import { createContext } from "react";
import { MODAL_TYPES } from "../components/core/Modal/constants";

interface ModalContext {
  isOpen: (modalIdentifier: MODAL_TYPES) => boolean;
  setIsOpen: (open: boolean, modalIdentifier: MODAL_TYPES) => void;
}

const initContext: ModalContext = {
  isOpen: () => false,
  setIsOpen: () => {},
};

export const ModalContext = createContext<ModalContext>(initContext);
