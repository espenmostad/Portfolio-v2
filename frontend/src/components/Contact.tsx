import React from "react";

// Contact
type ContactProps = {
    email: string;
  };
  
  export default function Contact(data: ContactProps) {
    const { email } = data;
  
    return (
        <React.Fragment>
            <form onSubmit={(e) => { 
                e.preventDefault();  // Prevent the default form submission behavior
                alert(`Email: ${email}`);
            }}>
                <button type="submit">Kontakt meg</button>
            </form>
        </React.Fragment>
        //<p>Email: {email}</p>
      );
  }