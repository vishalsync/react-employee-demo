import { useEffect, useState } from "react";

// Third party packages
import { useNavigate } from "react-router-dom";

// components
import EmployeeList from "../../components/employee/employee-list";
import ViewPageScaffold from "../../components/scaffold/view-page-scaffold";
import axiosInstance from "../../helpers/axios_helpers";


const EmployeesPage = () => {

    const [employees, setEmployees] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {

        axiosInstance.get("/employee")
            .then(({data}) => {
                const employeeList = data.data;
                setEmployees(employeeList ?? []);
            })
            .catch(error => {})

    }, []);


    const deleteEmployee = async (employeeId: string) => {
        const employeeList = [...employees];

        try {
            const filterEmployee = employeeList.filter(employee => (employee as any)._id !== employeeId);
            setEmployees(filterEmployee);
            await axiosInstance.delete(`/employee/${employeeId}`);

        } catch(error) {
            // Handle login error
            setEmployees(employeeList);
        }
    }// End of deleteEmployee function

    return (
        <ViewPageScaffold
            title="Employee List"
            onPressed={() => navigate("/employee/add")}
            >

            <EmployeeList 
                employees={employees}
                onDelete={deleteEmployee}
                />

        </ViewPageScaffold>
    )
}// End of EmployeesPage


export default EmployeesPage;