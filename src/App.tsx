import { Suspense } from "react";
import RenderRouter from "./routes";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading</div>}>
        <RenderRouter />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
