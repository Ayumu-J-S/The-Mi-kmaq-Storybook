import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { RoutingContext } from "../../context/Routing.js";
import { pagesMapping } from "../../context/Routing.js";
import "./Storybook.css";
import StoryPicture from "./imgComponents/StoryPicture.js";
import StoryText from "./textComponents/StoryText.js";
import Button from "./buttonComponents/StoryButton.js";
import ChoiceGrid from "./choiceGrid/ChoiceGrid.js";
import TextOfChoice from "./textOfChoice/TextOfChoice.js";

function findStoryArr(arr, target) {
    for (let obj of arr) {
        if (obj.chapter === target) {
            return obj.pages;
        }
    }
    return null;
}

const Storybook = (props) => {
    const dataDir = "https://ugdev.cs.smu.ca/~group17/Form/UPLOADS/";

    const { chapterNum, setPage, setChoice } = useContext(RoutingContext);

    const [storyArr, setStoryArr] = useState([]);
    const [pageArr, setPageArr] = useState([]);
    const [pageCount, setPageCount] = useState(1);

    useEffect(() => {
        axios.get("/get").then((response) => {
            let arr = findStoryArr(response.data, chapterNum);
            setStoryArr(arr);
            setPageArr(arr[pageCount - 1].filenames);
        });
    }, []);

    useEffect(() => {
        if (storyArr.length) {
            if (storyArr[pageCount - 1])
                setPageArr(storyArr[pageCount - 1].filenames);
        }
    }, [pageCount]);

    return (
        <div id="main-pane">
            <div id="left-pane">
                <StoryPicture
                    src={dataDir + pageArr[0]}
                    alt={dataDir + pageArr[0]}
                ></StoryPicture>
                <StoryText>{pageArr[8]}</StoryText>
                <Button fontSize="24px" margin="15px 10px 25px 10px">
                    English Translation
                </Button>
                <Button>Play Audio</Button>
            </div>
            <div id="right-pane">
                <div className="center-align-vertical">
                    <ChoiceGrid
                        img1={dataDir + pageArr[1]}
                        choice1={pageArr[9]}
                        img2={dataDir + pageArr[2]}
                        choice2={pageArr[10]}
                        img3={dataDir + pageArr[3]}
                        choice3={pageArr[11]}
                    ></ChoiceGrid>
                    <TextOfChoice></TextOfChoice>
                    <Button
                        margin="50px 10px 25px 10px"
                        width="150px"
                        onClick={() => {
                            setChoice("");
                            if (storyArr[pageCount - 2]) {
                                setPageCount(pageCount - 1);
                            } else {
                                setPage(pagesMapping.home);
                            }
                        }}
                    >
                        Previous
                    </Button>
                    <Button
                        argin="50px 10px 25px 10px"
                        width="150px"
                        onClick={() => {
                            setChoice("");
                            if (storyArr[pageCount]) {
                                setPageCount(pageCount + 1);
                            } else {
                                //Needs to add end page here
                            }
                        }}
                    >
                        Next
                    </Button>
                </div>
            </div>
            <footer>footer</footer>
        </div>
    );
};

export default Storybook;
