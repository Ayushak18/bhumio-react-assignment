import "./App.css";
import { Routes, Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import SingleProject from "./pages/SingleProject";

function App() {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/project" element={<SingleProject />}></Route>
      </Routes>
    </>
  );
}

export default App;
