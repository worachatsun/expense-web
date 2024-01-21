import { FunctionComponent, ReactNode, useEffect } from "react";
import { useModalContext } from "../../../hooks/useModalContext";
import { MODAL_TYPES } from "./constants";

interface Props {
  onCloseModal: () => void;
}

interface RenderPropsComponentProps<T> {
  children: (props: T) => ReactNode;
  modalIdentifier: MODAL_TYPES;
  onClose?: () => void;
}

const Modal: FunctionComponent<RenderPropsComponentProps<Props>> = ({
  modalIdentifier,
  onClose,
  children,
}) => {
  const { isOpen, setIsOpen } = useModalContext();
  const onCloseModal = () => setIsOpen(false, modalIdentifier);

  useEffect(() => {
    !isOpen(modalIdentifier) && onClose && onClose();
  }, [isOpen, modalIdentifier, onClose]);

  return isOpen(modalIdentifier) ? (
    <div
      id="static-modal"
      data-modal-backdrop="static"
      tabIndex={-1}
      aria-hidden="true"
      className="overflow-y-auto bg-smoke-light overflow-x-hidden flex fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      {children({ onCloseModal })}
    </div>
  ) : (
    <></>
  );
};

export { Modal };
