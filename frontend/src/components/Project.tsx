import React from "react";
import { Project as ProjectType} from "./types";

export default function Project(data: ProjectType) {
    const {title, description} = data;

    return (
        <React.Fragment>
            <p>{title}</p> <p>{description}</p>
        </React.Fragment>
    );
}