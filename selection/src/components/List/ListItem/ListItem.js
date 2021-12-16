import React, { useContext } from "react";
import "./ListItem.css";
import { RoutingContext } from "../../../context/Routing";
import useSessionStorage from "../../../hooks/useSessionStorage";

/**
 * Components that takes attributes of the following
 *  - title: title of the project (string)
 *  - img: link for the image for the project (string)
 *  - author: author(s) of the project
 *  - page: string of the page name set in PagesMapping in Routing.js in context dir
 *          This can be empty and that case browser will open a new tab with a link.
 *  - link: the link of the project
 *
 * @author Ayumu Saito
 * @param {Props} props consists of propeties describes above
 * @returns Component that shows image in the background and the list of description
 *          described above.
 */
const ListItem = (props) => {
    // Spred the props between these varialbes below
    const { title, img, author, page, link } = props;

    let { setPage } = useContext(RoutingContext);

    //It is going to save the link with pageLink as key
    const [pageLink, setPageLink] = useSessionStorage("pageLink", {});

    /*  
    If the page exists in propery then return the component that goes to the 
    page mentioned in page. If not, make the whole component as a anchor 
    link that goes to the link specfied in link in properties.
    */
    if (page) {
        return (
            <article
                style={{
                    backgroundImage: `url(${img})`,
                }}
                id="item"
                onClick={() => {
                    setPage(page);
                    //If link is defined set the link on local session
                    if (link) {
                        setPageLink(link);
                    }
                }}
            >
                <a>
                    <h1>{title}</h1>
                    <h2>{author}</h2>
                </a>
            </article>
        );
    } else {
        return (
            <a
                href={link}
                style={{
                    backgroundImage: `url(${img})`,
                }}
                id="itemOnlyLink"
                target="__blank"
            >
                <h1>{title}</h1>
                <h2>{author}</h2>
            </a>
        );
    }
};

export default ListItem;
