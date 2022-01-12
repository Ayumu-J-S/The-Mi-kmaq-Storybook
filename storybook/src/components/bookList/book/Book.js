import React, { useContext } from "react";
import "./Book.css";
import { RoutingContext } from "../../../context/Routing";

/**
 * Components that takes attributes of the following as properties.
 *  - title: title of the book (string)
 *  - img: link for the image for the story (string)
 *  - author: author of the book (string)
 *  - numPages: number of the pages that the story has (number)
 *  - link: the link to direct user to when clicked (string)
 *
 * @param {Props} props consists of propeties describes above
 * @returns an anchor link that holds info about the book and
 * when user clicks it, it opens the story.
 */
const Book = (props) => {
    // Spread the props to these values
    // props have to have these properties below (spelled exactly)
    const { title, img, author, numPages, link, chapterNum } = props;

    let { setPage, setChapterNum } = useContext(RoutingContext);

    // Return a anchor link holding info about the book
    if (link) {
        return (
            <a href={link} id="book">
                <img id="bookCover" src={img} alt="" />
                <h1>{title}</h1>
                <h2>{author}</h2>
                <h2>{numPages} pages</h2>
            </a>
        );
    } else {
        return (
            <div
                id="book"
                onClick={() => {
                    setChapterNum(chapterNum);
                    setPage("storybook");
                }}
            >
                <img id="bookCover" src={img} alt="" />
                <h1>{title}</h1>
                <h2>{author}</h2>
                <h2>{numPages} pages</h2>
            </div>
        );
    }
};

export default Book;
