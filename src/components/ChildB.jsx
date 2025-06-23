function ChildB({ dataFromChildren }) {
    const dataB = 'XYZ';

    dataFromChildren({ dataB });

    return (
        <div>ChildB</div>
    )
}

export default ChildB;