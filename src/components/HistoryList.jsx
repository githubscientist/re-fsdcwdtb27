import { useContext } from "react";
import { AppContext } from "../App";

const HistoryList = () => {

    const { likesHistory } = useContext(AppContext);

    return <p>{likesHistory.join(', ')}</p>
}

export default HistoryList;