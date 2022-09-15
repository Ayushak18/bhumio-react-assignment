import "./styles/app.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import SingleProject from "./pages/SingleProject";
import PdfReportPage from "./pages/PdfReportPage";
import Chart from "./pages/Chart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/project/:id" element={<SingleProject />}></Route>
        <Route path="/report/pdf-report" element={<PdfReportPage />}></Route>
        <Route path="/report/projectbudgetplot" element={<Chart />}></Route>
      </Routes>
    </>
  );
}

export default App;
