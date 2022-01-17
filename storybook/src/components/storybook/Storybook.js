import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { RoutingContext } from "../../context/Routing.js";
import { pagesMapping } from "../../context/Routing.js";
import "./Storybook.css";
import StoryPicture from "./imgComponents/StoryPicture.js";
import StoryText from "./textComponents/StoryText.js";
import Button from "./buttonComponents/StoryButton.js";
import PopupButton from "./buttonComponents/PopupButton.js";
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
    const [isEndPage, setIsEndPage] = useState(false);

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

    if (!isEndPage) {
        return (
            <div id="main-pane">
                <div id="left-pane">
                    <StoryPicture
                        src={dataDir + pageArr[0]}
                        alt={dataDir + pageArr[0]}
                    ></StoryPicture>
                    <StoryText>{pageArr[8]}</StoryText>
                    <PopupButton buttonText="English Translation">
                        {pageArr[12]}
                    </PopupButton>
                    <Button
                        onClick={() => {
                            let audFile = dataDir + pageArr[7];
                            const aud = new Audio(audFile);
                            aud.play();
                        }}
                    >
                        Play Audio
                    </Button>
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
                            aud1={dataDir + pageArr[4]}
                            aud2={dataDir + pageArr[5]}
                            aud3={dataDir + pageArr[6]}
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
                                    setIsEndPage(true);
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
    } else {
        return (
            <div id="main-pane">
                <div id="left-pane">
                    <h1>
                        <strong>Our story has reached its end.</strong>
                    </h1>
                    <StoryText>
                        {
                            " The text in this block will be in the Native Mi'kmaw language "
                        }
                    </StoryText>
                </div>
                <div id="right-pane">
                    <h1>
                        The Mi'kmaq Storybook. <br />
                        Told in the language of Mi'kmaw. <br />
                        Using the Smith-Francis translations.
                    </h1>
                    <div>
                        <img
                            src="https://images.squarespace-cdn.com/content/v1/56a7b5951c1210756e3465c1/1622660877900-KPNSB04Y5QXPILQD1AHX/SMU_Logo.jpg'"
                            alt="SMU logo"
                            style={{ width: "100%" }}
                        />
                        <h1>Group-17</h1>
                        <Button
                            argin="50px 10px 25px 10px"
                            width="300px"
                            onClick={() => {
                                setIsEndPage(false);
                            }}
                        >
                            Previous
                        </Button>
                        <Button
                            argin="50px 10px 25px 10px"
                            width="300px"
                            onClick={() => {
                                setPage(pagesMapping.home);
                            }}
                        >
                            Select Book
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
};

export default Storybook;
