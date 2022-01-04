import React, { useContext } from "react";
import "./TextOfChoice.css";
import { RoutingContext } from "../../../context/Routing.js";

const TextOfChoice = (props) => {
    let { choice } = useContext(RoutingContext);

    return (
        <div id="text-of-choice-container">
            <table>
                <tr>
                    <td>&emsp; Text of choice</td>
                </tr>
                <tr>
                    <td id="choiceText">{choice}</td>
                </tr>
            </table>
        </div>
    );
};

export default TextOfChoice;
