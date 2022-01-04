import React, { useContext, useEffect } from "react";
import "./ChoiceGrid.css";
import { RoutingContext } from "../../../context/Routing.js";
import ChoiceImg from "../imgComponents/ChoiceImg.js";
import Button from "../buttonComponents/StoryButton.js";

const ChoiceGrid = (props) => {
    const { img1, choice1, img2, choice2, img3, choice3 } = props;
    const choiceArr = [
        [img1, choice1],
        [img2, choice2],
        [img3, choice3],
    ];

    let { setChoice } = useContext(RoutingContext);

    return (
        <div id="choice-grid">
            {choiceArr.map((choiceElem) => {
                return (
                    <div className="choice-container">
                        <ChoiceImg src={choiceElem[0]} alt="" />
                        <Button
                            fontSize="18px"
                            margin="10px 5px 15px 5px"
                            width="100%"
                            onClick={() => {
                                setChoice(choiceElem[1]);
                            }}
                        >
                            {choiceElem[1]}
                        </Button>
                    </div>
                );
            })}
        </div>
    );
};

export default ChoiceGrid;
