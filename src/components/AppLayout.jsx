import ContactBar from "./ContactBar"

const AppLayout = (props) => {
    const {children} = props;
    return (
        <div>
            <ContactBar />
            {children}
        </div>
    )
}

export default AppLayout