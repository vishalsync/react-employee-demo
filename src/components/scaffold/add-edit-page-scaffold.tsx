import Button from "../form/button";

interface AddEditPageScaffoldProps {
    title?: string
    onPressed?: () => any
    actions?: React.ReactNode[]
}


const AddEditPageScaffold : React.FC<AddEditPageScaffoldProps> = (props) => {

    const { title, onPressed, actions, children } = props;

    return (
        <>
            <div className='flex items-center justify-between'>
                <h1 className="text-2xl font-bold my-8 text-center">{title}</h1>
                <div>
                    {onPressed &&
                        <Button 
                            onPressed={onPressed}
                            variant='secondary' className='text-red-800 border border-red-800'
                            >
                            Cancel
                        </Button>
                    }

                    {actions}
                </div>
            </div>
            {children}
        </>
    );

}// End of AddEditPageScaffold component

export default AddEditPageScaffold;