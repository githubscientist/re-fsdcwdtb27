import ChildB from "./ChildB";

function ChildA({ count }) {
    return <ChildB
        count={count}
    />
}

export default ChildA;