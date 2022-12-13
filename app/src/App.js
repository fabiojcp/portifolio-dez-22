import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
import "./style/reset.css";
import "./style/global.css";
import "./style/keyframes.css";

function App() {

  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
