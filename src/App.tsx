import { Suspense } from "react";
import RenderRouter from "./routes";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import "./App.css";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Suspense fallback={<div>Loading</div>}>
          <RenderRouter />
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
