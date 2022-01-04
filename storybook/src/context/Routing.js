import React, { useState } from "react";

// Assign keys and values to pagesMapping to be used in state contex.
export const pagesMapping = {
    home: "bookselect",
    storybook: "storybook",
};

// Initialize the context
export const RoutingContext = React.createContext({});

/**
 * A react component that takes all the children component. This function
 * makes the state context usable between all the children components.
 * All the children of Router will be able to access RoutingContext
 *
 * @returns context provider that wraps the tree of components
 * (all the decendents of children) that need the state context.
 */
export default function Router({ children }) {
    //Put pagesMapping.home (section) as default state
    const [page, setPage] = useState(pagesMapping.home);
    const [storyName, setStoryName] = useState("");
    const [choice, setChoice] = useState("");

    //Children of Router will be able to access value
    const value = { page, setPage, storyName, setStoryName, choice, setChoice };

    return (
        <RoutingContext.Provider value={value}>
            {children}
        </RoutingContext.Provider>
    );
}
