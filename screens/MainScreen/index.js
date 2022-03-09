import React from "react";
import TopView from "../../components/TopView";
import { UseCountContext } from "../../contextAPI/countContextProvider";

export default function MainScreen() {
    const countContext=UseCountContext();
    console.log(countContext);
    return (
        <>
            <TopView />
        </>
    );

}