import { useContext } from "react";
import { AppContext } from "../contexts/AppContextComponent";

const HistoryList = () => {

    const { likesHistory } = useContext(AppContext);

    return <p>{likesHistory.join(', ')}</p>
}

export default HistoryList;