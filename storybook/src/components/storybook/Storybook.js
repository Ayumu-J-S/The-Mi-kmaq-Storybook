import React, { useContext } from "react";
import { RoutingContext } from "../../context/Routing";

const Storybook = (props) => {
    const { storyName } = useContext(RoutingContext);
    return <div>{storyName}</div>;
};

export default Storybook;
