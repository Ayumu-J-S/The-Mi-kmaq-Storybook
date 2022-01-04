import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { RoutingContext } from "../../context/Routing.js";
import "./Storybook.css";
import StoryPicture from "./imgComponents/StoryPicture.js";
import StoryText from "./textComponents/StoryText.js";
import Button from "./buttonComponents/StoryButton.js";
import ChoiceGrid from "./choiceGrid/ChoiceGrid.js";
import TextOfChoice from "./textOfChoice/TextOfChoice.js";

function findStoryArr(arr, target) {
    for (let obj of arr) {
        if (obj.title === target) {
            return obj.pages;
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
        axios.get("/get").then((response) => {
            let arr = findStoryArr(response.data, storyName);
            setStoryArr(arr);
            setPageArr(arr[pageCount - 1].filenames);
        });
    }, []);

    return (
        <div id="main-pane">
            <div id="left-pane">
                <StoryPicture
                    src={
                        "https://ugdev.cs.smu.ca/~m_khattri/UPLOADS/" +
                        pageArr[0]
                    }
                    alt={
                        "https://ugdev.cs.smu.ca/~m_khattri/UPLOADS/" +
                        pageArr[0]
                    }
                ></StoryPicture>
                <StoryText>{pageArr[8]}</StoryText>
                <Button fontSize="24px" margin="15px 10px 25px 10px">
                    English Translation
                </Button>
                <Button>Play Audio</Button>
            </div>
            <div id="right-pane">
                <ChoiceGrid
                    img1={
                        "https://ugdev.cs.smu.ca/~m_khattri/UPLOADS/" +
                        pageArr[1]
                    }
                    choice1={pageArr[9]}
                    img2={
                        "https://ugdev.cs.smu.ca/~m_khattri/UPLOADS/" +
                        pageArr[2]
                    }
                    choice2={pageArr[10]}
                    img3={
                        "https://ugdev.cs.smu.ca/~m_khattri/UPLOADS/" +
                        pageArr[3]
                    }
                    choice3={pageArr[11]}
                ></ChoiceGrid>
                <TextOfChoice></TextOfChoice>
            </div>
            <footer>footer</footer>
        </div>
    );
};

export default Storybook;
