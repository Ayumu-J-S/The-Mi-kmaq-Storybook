import { useContext } from "react";
import Projects from "./pages/Projects.js";
import EmbeddedProj from "./pages/EmbeddedProj.js";
import { pagesMapping, RoutingContext } from "./context/Routing.js";
import BookList from "./components/BookList/BookList.js";
import "./App.css";

/**
 * A function that decides what page is to render.
 *
 * @author Ayumu Saito
 * @returns a div one of components that are in div according to what is
 * stored in the variable page. This variable is feched by using context.
 */
function App() {
    // Access page
    const { page } = useContext(RoutingContext);

    // Return components according to the state
    // Returns only one of the component
    return (
        <div>
            {pagesMapping.home === page && <Projects />}
            {pagesMapping.embededProj === page && <EmbeddedProj />}
            {pagesMapping.bookSelect === page && <BookList />}
        </div>
    );
}

export default App;
