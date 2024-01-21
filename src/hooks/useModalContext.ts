import { useContext } from 'react';
import { ModalContext } from '../components/core/Modal/ModalContext';

export const useModalContext = () => {
    const { isOpen, setIsOpen } = useContext(ModalContext);
    return {
        isOpen,
        setIsOpen,
    };
};
