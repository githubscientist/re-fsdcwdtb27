function ChildA({ dataFromChildren }) {
    const dataA = 'ABC';

    dataFromChildren({ dataA });

    return (
        <div>ChildA</div>
    )
}

export default ChildA;