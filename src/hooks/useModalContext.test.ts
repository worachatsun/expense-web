import { renderHook } from "@testing-library/react";
import { useModalContext } from './useModalContext'
import { MODAL_TYPES } from "../components/core/Modal/constants";

describe("useModalContext", () => {
    it('should return an object with isOpen and setIsOpen properties when called', () => {
        const { result } = renderHook(() => useModalContext());
        expect(result.current).toHaveProperty('isOpen');
        expect(result.current).toHaveProperty('setIsOpen');
    });

    it('should return the correct values for isOpen and setIsOpen', () => {
        const { result } = renderHook(() => useModalContext());
        expect(result.current.isOpen(MODAL_TYPES.ADD_EXPENSE)).toBe(false);
        expect(result.current.setIsOpen).toBeInstanceOf(Function);
    });
});
