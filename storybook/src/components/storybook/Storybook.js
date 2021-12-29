import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { RoutingContext } from "../../context/Routing";
import "./Storybook.css";

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
        axios.get("/test").then((response) => {
            let arr = findStoryArr(response.data.arr, storyName);
            setStoryArr(arr);
        });
    }, []);

    useEffect(() => {
        setPageArr(storyArr[pageCount - 1]);
    }, [storyArr]);

    return (
        <div id="mainPane">
            <div id="left-pane">{pageArr}</div>
            <div id="right-pane">a</div>
        </div>
    );
};

export default Storybook;
