function Hello(props) {
    const name = 'ABC';
    props.dataFromChild({ name });

    return <h1>Hello World</h1>;
}

export default Hello;