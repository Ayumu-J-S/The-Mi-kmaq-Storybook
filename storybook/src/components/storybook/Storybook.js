import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { RoutingContext } from "../../context/Routing.js";
import "./Storybook.css";
import StoryPicture from "./imgComponents/StoryPicture.js";
import StoryText from "./textComponents/StoryText.js";
import Button from "./buttonComponents/StoryButton.js";

function findStoryArr(arr, target) {
    for (let obj of arr) {
        if (obj.title === target) {
            return obj.filenames;
        }
    }
    return null;
}

const Storybook = (props) => {
    const { storyName } = useContext(RoutingContext);

    const [storyArr, setStoryArr] = useState([]);
    const [pageArr, setPageArr] = useState([]);
    const [pageCount, setPageCount] = useState(1);

    useEffect(() => {
        fetch("/test").then((response) => {
            let arr = findStoryArr(response.data.arr, storyName);
            setStoryArr(arr);
            setPageArr(arr[pageCount - 1]);
        });
    }, []);

    return (
        <div id="main-pane">
            <div id="left-pane">
                <StoryPicture
                    src="https://www.camera-rumors.com/wp-content/uploads/2018/02/sony-a7iii-sample-image-3.jpg"
                    // src={"linkToTheDir/" + pageArr[0]}
                    alt={"linkToTheDir/" + pageArr[0]}
                ></StoryPicture>
                <StoryText>
                    {
                        "The overflow property or\
                    to add scrollbars when an elemenThe overflow  or\
                    to add scrollbars when an elemenThe overflow or\
                    to add scrollto add scro"
                    }
                </StoryText>
                <Button fontSize="24px" margin="15px 10px 25px 10px">
                    English Translation
                </Button>
                <Button>Play Audio</Button>
            </div>
            <div id="right-pane">a</div>
            <footer>footer</footer>
        </div>
    );
};

export default Storybook;
