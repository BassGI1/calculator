import React from "react";

export default function Box(props) {

    return (

        <button className={`box${props.type}`} style={props.type === "3" ? {alignSelf: "center"} : {}} onClick={() => props.change(props.value)}>
            {props.value}
        </button>

    )

}