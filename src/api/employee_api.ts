import axiosInstance from "../helpers/axios_helpers";

export const getEmployeeById = async (employeeId: string)  => {

    try {
        const { data : { data }} = await axiosInstance.get(`/employee/${employeeId}`);

        return data || {}

    } catch(error) {
        // Handle login error
    }

}// End of getEmployeeById function