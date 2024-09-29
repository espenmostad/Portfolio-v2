import React from "react";

// Header
type HeaderProps = {
    student: string;
    degree: string;
    points: number;
  };
  
  export default function Header(data: HeaderProps) {
    const { student, degree, points } = data;
    
  
    return (
    <React.Fragment>
        <h1>{student}</h1> <p>{degree} {points} studiepoeng</p>
    </React.Fragment>
      );
  }