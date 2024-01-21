import { act, renderHook, waitFor } from "@testing-library/react";
import { useFatchFact } from "./useFetchFact";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("useFatchFact", () => {
  it("should call refetch function when useEffect is triggered", async () => {
    const { result } = renderHook(() => useFatchFact(), { wrapper });
    await waitFor(() => expect(result.current.isLoading).toBe(true));
  });

  it("should call refetch function on useEffect", async () => {
    const { result } = renderHook(() => useFatchFact(), { wrapper });
    const spy = vi.spyOn(result.current, "refetch");
    act(() => {
      result.current.refetch();
    });
    await waitFor(() => expect(spy).toHaveBeenCalled());
  });
});
