// Third party package
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


// pages
import EmployeesPage from "./pages/employee/employees";
import AddEditEmployeePage from "./pages/employee/add-edit-employee";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmployeesPage />} />
        <Route path="/employee" element={<EmployeesPage />} />
        <Route path="/employee/:slug" element={<AddEditEmployeePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
