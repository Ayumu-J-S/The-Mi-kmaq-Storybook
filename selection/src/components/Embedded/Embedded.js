import { useContext } from "react";
import { RoutingContext, pagesMapping } from "../../context/Routing.js";
import useSessionStorage from "../../hooks/useSessionStorage.js";
import "./Embedded.css";
import Button from "../Button.js";

/**
 * A component that holds a project in a embedded window. If the project
 * cannot be in embedded window, then it display the error message.
 *
 * @author Ayumu Saito
 * @returns a page that holds a project in a embedded window.
 */
const Embedded = () => {
    // Use set Page function defined in Routing.js in context dir
    // This is used for the go-back button
    const { setPage } = useContext(RoutingContext);
    // Get the pageLink that is store in the local Session
    const [pageLink] = useSessionStorage("pageLink", {});

    return (
        <div>
            <object data={pageLink} id="object">
                <embed src={pageLink} id="page" />
                {
                    "Embedded data could not be displayed, Click the below link to open the page."
                }
            </object>
            <div></div>
            <a href={pageLink} target="_blank" id="link">
                {pageLink}
            </a>
            <div></div>
            {/* When clicked, go back to home page. */}
            <Button onClick={() => setPage(pagesMapping.home)}>Go Back</Button>
        </div>
    );
};

export default Embedded;
