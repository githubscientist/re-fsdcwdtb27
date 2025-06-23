import ChildA from "./components/ChildA";
import ChildB from "./components/ChildB";

function App() {

    function dataFromChildren(data) {
        if (data.dataA) console.log('data from child a:', data.dataA);
        if (data.dataB) console.log('data from child b:', data.dataB);
    }

    return (
        <div>
            <ChildA
                dataFromChildren={dataFromChildren}
            />
            <ChildB
                dataFromChildren={dataFromChildren}
            />
        </div>
    )
}

export default App;