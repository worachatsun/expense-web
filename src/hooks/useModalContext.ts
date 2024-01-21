import { useContext } from 'react';
import { ModalContext } from '../contexts/ModalContext';

export const useModalContext = () => {
    const { isOpen, setIsOpen } = useContext(ModalContext);
    return {
        isOpen,
        setIsOpen,
    };
};
