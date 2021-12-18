import React, { useEffect, useState, useContext } from "react";
import "./BookList.css";
import Book from "./Book/Book.js";
import { RoutingContext, pagesMapping } from "../../context/Routing.js";
import Button from "../Button.js";

/**
 * A function to concatenate two arrays and returns the concatenated
 * array as new array
 *
 * @author Ayumu Saito
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns a new array that is arr1 concatenated with arr2
 */
function concatenateArray(arr1, arr2) {
    let arr3 = arr1.concat(arr2);
    return arr3;
}

/**
 * A component that holds Book component and serves as a page.
 *
 * @returns a page with different books' info
 */
const BookList = () => {
    const { setPage } = useContext(RoutingContext);

    // Use useState function make change in the react elements.
    // book holds the info of the storys.
    const [books, setList] = useState([
        {
            id: 1,
            img: "../Images/imageschap1/Pic2.jpg",
            title: "A Sunny Day down by the River",
            author: "James W. Isaacs ",
            numPages: 5,
            link: "http://ugdev.cs.smu.ca/~group17/Pages/chap1page1.html",
        },
        {
            id: 2,
            img: "../Images/eagle.jpg",
            title: "A Sunny Day down by the River, work in progress",
            author: "James W. Isaacs",
            numPages: "5",
            link: "http://ugdev.cs.smu.ca/~group17/Pages/Chap2.html",
        },
        {
            id: 3,
            img: "../Images/eagle.jpg",
            title: "Chap2, work in progress",
            author: "James W. Isaacs",
            numPages: "5",
            link: "http://ugdev.cs.smu.ca/~group17/Pages/Chap2.php",
        },
    ]);

    // This will be pulled from server in the future.
    const other = [];

    // This call back only runs when the components first mount.
    useEffect(() => {
        setList(concatenateArray(books, other));
    }, []);

    // Map the book array and toss each objects property in Book component.
    // Also returns Button component in the bottom of the page.
    return (
        <div>
            <section className="booklist">
                {books.map((book) => {
                    return (
                        <Book
                            key={book.id}
                            img={book.img}
                            title={book.title}
                            author={book.author}
                            numPages={book.numPages}
                            link={book.link}
                        ></Book>
                    );
                })}
            </section>
            {/* When clicked go to the home page. */}
            <Button onClick={() => setPage(pagesMapping.home)}>Go Back</Button>
        </div>
    );
};

export default BookList;
