import React, { useEffect, useState, useContext } from "react";
import "./BookList.css";
import Book from "./book/Book.js";
import { RoutingContext, pagesMapping } from "../../context/Routing.js";
import Button from "../buttons/ButtonDarkGreen.js";
import axios from "axios";

/**
 * A function to concatenate two arrays and returns the concatenated
 * array as new array
 *
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns a new array that is arr1 concatenated with arr2
 */
function concatenateArray(arr1, arr2) {
    let arr3 = arr1.concat(arr2);
    return arr3;
}

/**
 * A function that counts the number of pages, given a object
 * that holds pages in arrays. The function assumes that the
 * key name for the array is "filenames".
 *
 * @param {Object} inputObj
 * @returns numb er of pages in the object
 */
function countPages(inputObj) {
    let pagesArr = inputObj.pages;
    return pagesArr.length;
}

/**
 * A function that adds "numPages" key and value in the input Array.
 *
 * @param {Array} inputArr
 */
function fixArr(inputArr) {
    let dataDir = "https://ugdev.cs.smu.ca/~group17/Form/UPLOADS/";

    for (let i = 0; i < inputArr.length; i++) {
        inputArr[i]["numPages"] = countPages(inputArr[i]);
        inputArr[i]["img"] = dataDir + inputArr[i].pages[0].filenames[0];
    }
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
            img: "../Images/eagle.jpg",
            title: "A Sunny Day down by the River",
            author: "James W. Isaacs",
            numPages: "5",
            link: "http://ugdev.cs.smu.ca/~group17/Pages/Chap2.html",
        },
    ]);

    // This call back only runs when the components first mount.
    useEffect(() => {
        // Fetch the data from the server.
        axios.get("/get").then((response) => {
            // Add 'numPages' key and value to the objects
            fixArr(response.data);

            // Concatenate with hardcoded story
            setList(concatenateArray(books, response.data));
        });
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
                            chapterNum={book.chapter}
                            author={book.author}
                            numPages={book.numPages}
                            link={book.link}
                        ></Book>
                    );
                })}
            </section>
            {/* When clicked go to the home page. */}
            <Button onClick={() => (window.location.href = "#")}>
                Go Back
            </Button>
        </div>
    );
};

export default BookList;
