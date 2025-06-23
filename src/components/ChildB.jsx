import ChildC from "./ChildC";

function ChildB({ count }) {
    return <ChildC
        count={count}
    />
}

export default ChildB;