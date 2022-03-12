// Third party packages
import { useNavigate } from "react-router-dom";

// Components
import EmployeeTile from "./employee-tile";


interface EmployeeListProps {
    employees: {
        _id: string
        name: string
        age: string
        email: string
        date_of_birth: string
        address?: string,
        photo: {
            src: string
            alt: string
        },
    }[],
    onDelete: (employeeId: string) => any
}


const EmployeeList: React.FC<EmployeeListProps> = (props) => {
    
    const { employees, onDelete } = props

    const navigate = useNavigate();

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
            {
                employees.map(employee => {

                    const { _id, name, photo } = employee;

                    return (
                        <EmployeeTile
                            key={_id}
                            name={name}
                            age={employee.age}
                            email={employee.email}
                            date_of_birth={employee.date_of_birth}
                            address={employee.address}
                            imageUrl={photo.src}
                            alt={photo.alt || name}
                            onDelete={() => onDelete(_id)}
                            onEdit={() => navigate("/employee/edit", {state: _id})}
                            />
                    );
                })
            }
        </div>
    );
    
}// End of EmployeeList


export default EmployeeList;