import { useEffect, useState } from "react";

// Third party package
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { getEmployeeById } from "../../api/employee_api";

// components
import Button from "../../components/form/button";
import Input from "../../components/form/input";
import axiosInstance from "../../helpers/axios_helpers";



const AddEditEmployeePage = () => {

    const [employeeImagePreview, setEmployeeImagePreview] = useState("");

        const [inputData, setInputData] = useState({
        name: "",
        age: "",
        email: "",
        date_of_birth: "",
        address: "",
        employee_image: "",
    });

    const navigate = useNavigate();
    const location = useLocation();
    const _id = location.state;
    const { slug } = useParams();

    useEffect(() => {

        if(_id) {
            getEmployeeById(_id as string)
                .then(employee => {
                    const date = new Date(employee?.date_of_birth);
                    const year = date.getFullYear();
                    const month = date.getMonth() + 1;
                    const day = date.getDay();

                    const htmlDate = `${year}-${month > 9 ? month : "0"+month}-${day > 9 ? day : "0"+day}`;

                    setInputData({
                        name: employee?.name || "",
                        age: employee?.age || "",
                        email: employee?.email || "",
                        date_of_birth: htmlDate || "",
                        address: "",
                        employee_image: "",
                    });
                    setEmployeeImagePreview(employee.photo.src);

                    console.log("Rendered")
                })
                .catch(error => {

                });
        }

    }, [_id]);


    const onChangeHandler = (e: any) => {

        const {name, value, type, files} = e.target;

        const changedData = {
            ...inputData,
            [name]: value
        }

        if(type === "file") {
            (changedData as any)[name] = files[0];
            const fileReader = new FileReader();

            fileReader.onload = ((event: ProgressEvent<FileReader>) => {
                const base64Data = (event.target?.result) ? event.target?.result.toString() : "";
                setEmployeeImagePreview(base64Data);
            });

            fileReader.readAsDataURL(files[0]);
        }
        
        setInputData(changedData);
        


    }// End of onChangeHandler


    const addEditHandler = async (e: React.FormEvent) => {
        e.preventDefault();

        try {

            const formData = new FormData();
            for(const key in inputData) {
                formData.append(key, (inputData as any)[key]);
            }

            // send employee data
            if(_id) {
                formData.append("_id", _id as string);
                await axiosInstance.put("/employee", formData);

            } else {
                await axiosInstance.post("/employee", formData);
            }

            // redirect to employee
            navigate("/employee");

        } catch(error) {
            // Handle login error
        }

    }// End of addEditHandler


    return (
        <section className="flex justify-center">
            <form onSubmit={addEditHandler} className="mt-8 space-y-8">
                <h1 className="text-2xl font-semibold my-8 capitalize"> {slug} Employee </h1>
                <Input 
                    labelText="Name"
                    name="name" 
                    value={inputData.name}
                    placeholder="Enter employee name"
                    inputClassName="py-3"
                    onChange={onChangeHandler}
                    required={true}
                    />
                <Input 
                    labelText="Age"
                    name="age" 
                    inputType="number"
                    value={inputData.age}
                    placeholder="Enter employee age"
                    inputClassName="py-3"
                    onChange={onChangeHandler}
                    required={true}
                    />
                <Input 
                    labelText="Email"
                    name="email" 
                    inputType="email"
                    value={inputData.email}
                    placeholder="Enter employee emal"
                    inputClassName="py-3"
                    onChange={onChangeHandler}
                    required={true}
                    />
                <Input 
                    labelText="Date of birth (Optional)"
                    name="date_of_birth" 
                    inputType="date"
                    value={inputData.date_of_birth}
                    placeholder="Enter employee date of birth"
                    inputClassName="py-3"
                    onChange={onChangeHandler}
                    />
                <Input 
                    labelText="Address (Optional)"
                    name="address" 
                    value={inputData.address}
                    placeholder="Enter employee address"
                    inputClassName="py-3"
                    onChange={onChangeHandler}
                    />

                <div className="flex items-center space-x-4">
                    <img 
                        src={employeeImagePreview} 
                        alt={inputData.name}
                        className="w-16 h-16 object-cover rounded-full shadow-md"
                        />
                    <Input 
                        labelText="Employee photo (Optional)"
                        inputType="file"
                        name="employee_image" 
                        placeholder="Upload employee image"
                        inputClassName="py-3"
                        onChange={onChangeHandler}
                        accept="image/*"
                        />
                </div>

                <Button buttonType="submit" className="w-full text-white mt-8 capitalize"> {slug} employee </Button>
            </form>
        </section>
    )
}// End of AddEditEmployeePage


export default AddEditEmployeePage;