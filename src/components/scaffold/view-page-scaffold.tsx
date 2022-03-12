import Button from "../form/button";

interface ViewPageScaffoldProps {
    title?: string
    onPressed?: () => any
    actions?: React.ReactNode[]
}


const ViewPageScaffold : React.FC<ViewPageScaffoldProps> = (props) => {

    const { title, onPressed, actions, children } = props;

    return (
        <>
            <div className='flex items-center justify-between'>
                <h1 className="text-2xl font-bold my-8 text-center">{title}</h1>
                <div>
                    {onPressed && <Button onPressed={onPressed}>Add New</Button>}
                    {actions}
                </div>
            </div>
            {children}
        </>
    );

}// End of ViewPageScaffold component

export default ViewPageScaffold;