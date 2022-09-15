import "./styles/app.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import SingleProject from "./pages/SingleProject";

function App() {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/project/:id" element={<SingleProject />}></Route>
      </Routes>
    </>
  );
}

export default App;
