import React from "react";
import Project from "./Project";

export default function Projects() {
    //const { id, title, description } = props;
    return (
        <React.Fragment>
            <Project  title="Prosjekt 1" description="Masse tekst her...." />
            <Project  title="Prosjekt 2" description="Masse tekst her...." />
            <Project  title="Prosjekt 3" description="Masse tekst her...." />
            <Project  title="Prosjekt 4" description="Masse tekst her...." />
        </React.Fragment>
    )
  }