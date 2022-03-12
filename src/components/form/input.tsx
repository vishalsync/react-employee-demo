const Input: React.FC<Props> = props => {

    const { 
        id, inputType = "text", name, value, placeholder, onChange, required, checked,
        accept,labelText, hintText, hintTextBottom, inputClassName, containerClassName
    } = props;

    const inputClass = `w-full min-h-[40px] px-2 rounded focus:outline-none shadow-md ${inputClassName}`;
    const containerClass = `mb-2 w-full ${containerClassName}`;

    return (
        <div className={containerClass}>
            <div className="flex justify-between mb-1">
                {labelText && <label htmlFor={id || labelText} className="text-accent-100 font-semibold tracking-wide">{labelText}</label>}
                {hintText  && <span className="text-dark-75 text-sm">{hintText}</span>}
            </div>
            <input 
                id={id || labelText}
                type={inputType}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                required={required}
                accept={accept}
                checked={checked}
                className={inputClass} 
                />
            {hintTextBottom && <p className="text-right text-dark-75 text-sm">{hintTextBottom}</p>}
        </div>

    );

};// End of Input component


export default Input;


interface Props {
    id?: string,
    inputType?: React.HTMLInputTypeAttribute; 
    name: string,
    value?:string,
    placeholder?:string,
    checked?:boolean,
    labelText?: string,
    onChange: (event: any) => void;
    accept?: string,
    hintText?: string;
    hintTextBottom?:string,
    containerClassName?: string; 
    inputClassName?: string; 
    style?: Object;
    required?: boolean;
}