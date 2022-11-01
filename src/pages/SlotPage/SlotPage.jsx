import React from "react";
import {
    PlayArea,
    GameTitle,
    CreditArea,
} from "./components";

const SlotPage = () => {
    return(
        <React.Fragment>
            <GameTitle/>
            <PlayArea/>
            <CreditArea/>
        </React.Fragment>
    );
}

export default SlotPage;
