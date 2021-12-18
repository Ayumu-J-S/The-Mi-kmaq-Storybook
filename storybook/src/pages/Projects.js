import List from "../components/List/List";
import projectsArray from "./ProjectsArray";

/**
 * A simple function that shows List component.
 *
 * @author Ayumu Saito
 * @returns List component with projectsArray passed to list attribute.
 */
export default function Projects() {
    return (
        <div>
            <List list={projectsArray}></List>
        </div>
    );
}
