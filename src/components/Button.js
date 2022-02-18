import React from "react";
import Box from "./Box.js";

export default function Button(props) {

    return (
        <div style={{width: "35vw", margin: "3vw", display: "flex", flexWrap: "wrap", marginBottom: "0px", height: "85vh"}}>
            {props.buttons.map(x => <Box value={x} type={props.type} key={x} change={props.change}/>)}
        </div>
    )

}