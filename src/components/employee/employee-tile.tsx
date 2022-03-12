// Third party packages
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";

export interface EmployeeTileProps {
    name: string
    age: string
    email: string
    date_of_birth: string
    address?: string,
    imageUrl: string
    alt: string
    onDelete?: () => void,
    onEdit?: () => void,
}


const EmployeeTile: React.FC<EmployeeTileProps> = props => {

    const { name, age, email, imageUrl, alt, onDelete, onEdit } = props;

    return (
        <div className="flex shadow-md rounded-md border">
            <img 
                src={imageUrl}
                alt={alt}
                className="w-32 h-32 object-cover" 
                />
            <div className="p-2 col-span-8">
                <h2 className="text-2xl">{name}</h2>
                <p>AGE : {age}</p>
                <p className="flex space-x-2">
                    <span>Email:</span> <a href={`mailto:${email}`} className="text-blue-800 hover:underline">{email}</a>
                </p>
            </div>

            <div className="flex flex-col justify-between p-4">
                <MdDeleteOutline className="text-2xl text-red-800 cursor-pointer hover:shadow-md hover:border hover:p-1 rounded-full" onClick={onDelete} />
                <MdOutlineEdit className="text-2xl cursor-pointer hover:shadow-md hover:border hover:p-1 rounded-full" onClick={onEdit} />
            </div>
        </div>
    );// End of return

}// End of EmployeeTile component


export default EmployeeTile;