// Third party packages
import React from "react";
import { Link } from "react-router-dom";


const Button: React.FC<Props> = (props) => {

    const { 
        children, buttonType = "submit", variant = "primary", 
        onPressed, hintText, href, className, style
    } = props;

    const base = "text-sm text-center text-middle whitespace-nowrap px-6 py-2 rounded min-h-[40px] focus:outline-none hover:animate-bounce transition-all duration-700";
    const primary = `bg-blue-700 text-white shadow-md ${base}`;
    const secondary = `border rounded-full ${base}`;
    const icon = `p-2`;

    let buttonClass = primary;
    if(variant.toLowerCase() === "secondary") buttonClass = secondary;
    else if(variant.toLowerCase() === "icon") buttonClass = icon;
    else if(variant.toLowerCase() === "text") buttonClass = "";


    if(href)  {
        return (
            <Link to={href || "/"}>
                <span className={`flex items-center justify-center ${buttonClass} ${className}`} style={style}>
                    {children}
                </span>
            </Link>
        );
    }


    return (

        <div>
            <button 
                onClick={onPressed}
                className={` ${buttonClass} ${className}`}
                type={buttonType}
                style={style}
                >
                {children}
            </button>
            {hintText && <span className="block text-8 text-dark-50 mt-1 font-bold tracking-wider">{hintText}</span>}
        </div>

    );

};// End of Button component


export default Button;


interface Props {
    children: React.ReactNode;
    buttonType?: "submit" | "reset"; 
    variant?: "primary" | "secondary" | "icon" | "text"; 
    onPressed?: any;
    hintText?: string;
    href?: string; 
    className?: string; 
    style?: Object;
}