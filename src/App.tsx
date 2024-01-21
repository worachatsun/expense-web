import "./App.css";
import { ModalProvider } from "./components/core/Modal/ModalProvider";
import Landing from "./pages/Landing";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ModalProvider>
          <Landing />
        </ModalProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
