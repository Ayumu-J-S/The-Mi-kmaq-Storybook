import React from "react";
import Popup from "reactjs-popup";
import Button from "./StoryButton";
import "reactjs-popup/dist/index.css";
import "./PopupButton.css";

export default function PopupButton(props) {
    const { buttonText } = props;

    return (
        <Popup
            trigger={
                <Button fontSize="24px" margin="15px 10px 25px 10px">
                    {buttonText}
                </Button>
            }
            position="top center"
        >
            <p style={{ wordWrap: "break-word" }}>{props.children}</p>
        </Popup>
    );
}
