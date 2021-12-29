import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { RoutingContext } from "../../context/Routing";
import "./Storybook.css";

const Storybook = (props) => {
    const { storyName } = useContext(RoutingContext);

    const [storyArr, setStroyArr] = useState([]);
    const [pageCount, setPageCount] = useState(1);

    useEffect(() => {
        axios.get("/test").then((response) => {
            setStroyArr(response.data.arr[0].filenames);
        });
    }, []);
    return (
        <div id="mainPane">
            <div id="left-pane">{storyArr}</div>
            <div id="right-pane">a</div>
        </div>
    );
};

export default Storybook;
