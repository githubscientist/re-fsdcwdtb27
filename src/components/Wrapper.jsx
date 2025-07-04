const Wrapper = (props) => {

    console.log(props);

    return (
        <div>
            <h2>The following UI is from App!</h2>
            {props.children}
        </div>
    )
}

export default Wrapper