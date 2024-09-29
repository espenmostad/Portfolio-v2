import React from "react";
import Experience from "./Experience";

// Experiences

  export default function Experiences({ experienceOne, experienceTwo }) {
    return (
      <div>
        <Experience description={experienceOne} />
        <Experience description={experienceTwo} />        
      </div>
    )
  }
