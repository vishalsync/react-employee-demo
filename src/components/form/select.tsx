const Select: React.FC<Props> = props => {

    const { 
        id, name, defaultValue, onChange, children, required = false, multiple = false,
        labelText, hintText, hintTextBottom, containerClass, className
    } = props;

    const containerClassName = `mb-2 w-full ${containerClass}`;
    const selectClassName = `border border-dark w-full min-h-40 px-2 mb-1 rounded-md ${className}`;

    return (
        <div className={containerClassName}>

            <div className="flex justify-between mb-1">
                {labelText && <label htmlFor={id || labelText} className="text-accent-100 font-semibold tracking-wide">{labelText}</label>}
                {hintText && <span className="text-dark-75 text-sm">{hintText}</span>}
            </div>

            <select 
                id={id || labelText} 
                name={name} 
                defaultValue={defaultValue}
                className={selectClassName} 
                onChange={onChange} 
                required={required}
                multiple={multiple}
                >
                {children}
            </select>

            {hintTextBottom && <p className="text-right text-dark-75 text-sm">{hintTextBottom}</p>}

        </div>
    );

};// End of Input component


export default Select;


interface Props {
    id?: string,
    name:string,
    defaultValue?:string | number | readonly string[] | undefined,
    labelText?: string,
    onChange: (event: any) => void;
    children: React.ReactNode,
    hintText?: string;
    hintTextBottom?:string,
    className?: string; 
    containerClass?: string; 
    required?: boolean;
    multiple?: boolean;
    
}