import React from "react";
import "./List.css";
import ListItem from "./ListItem/ListItem.js";

/**
 * A page components that holds List components. This is the page where the
 * users can see what projects there are.
 *
 * @author Ayumu Saito
 * @param {Array} props array of objects that hold info about the project.
 * Each object has the following properties.
 * - id
 * - img
 * - title
 * - author
 * - page
 * - link
 * ListItem component uses these properties.
 * @returns a page component that has components (ListItme), which
 * has image of a project as a background and info about the projects.
 */
const List = (props) => {
    //props is an array of json objects with keys down below
    const { list } = props;
    return (
        <div>
            <header>klusuaqan aq papuaqn</header>
            <section className="list">
                {list.map((item, index) => {
                    return (
                        <ListItem
                            key={index}
                            img={item.img}
                            title={item.title}
                            author={item.author}
                            page={item.page}
                            link={item.link}
                        ></ListItem>
                    );
                })}
            </section>
            <footer>
                <p>
                    Designed and developed by © 2021 James W. Isaacs, Ayumu
                    Saito, Mahesh Khattri, Shamatul Jannat Raisa (For Saint
                    Mary's University and the Eskasoni Mi'kmaw Nation).
                </p>
            </footer>
        </div>
    );
};

export default List;
