import React from "react";
import Box from "./Box.js";

export default function Special(props) {

    return (

        <div style={{display: "flex", flexDirection: "column", marginTop: "-92.25vh", position: "static"}}>
            {props.buttons.map(x => <Box value={x} type="3" change={props.change} key={x}/>)}
        </div>

    )

}