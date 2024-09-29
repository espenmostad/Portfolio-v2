import React from "react";
import { useState, type FormEvent } from "react";

const createProject = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  export default function ProjectForm({
    addProjectToList, // The function to add a new project to the parent state
    projectlist,
  }: {
    addProjectToList: (newProject: any) => void;
    projectlist: any[];
  }) {



    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [projects, setProjects] = useState<Array<{ id: string; title: string; description: string; createdDate: Date;}>>([]);

    const updateTitle = (event: FormEvent<HTMLInputElement>) => {
        const input = event.target as HTMLInputElement | null;
        if (!input) return;
        setTitle(input.value);
    };

    const updateDescription = (event: FormEvent<HTMLInputElement>) => {
        const input = event.target as HTMLInputElement | null;
        if (!input) return;
        setDescription(input.value);
    };

    const newProject = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      
      const newProject = {
        id: crypto.randomUUID(), // Auto-generate a unique ID
        title,
        description,
        createdDate: new Date() // Automatically set to today's date
      };
  
      console.log(newProject)
      // Update the projects list by adding the new project
      setProjects((prevProjects) => [...prevProjects, newProject]);
      setProjectList((prevList) => [...prevList,newProject]);
      
      
      // Clear the input fields after submission
      setTitle("");
      setDescription("");
    };

    
    return (
      <React.Fragment>
        <form onSubmit={newProject}>
            <label htmlFor="title">
                Title:<br />
                <input type="text" 
                id="title" 
                name="title"
                onChange={updateTitle}
                value={title}  /><br />
            </label>
            <label htmlFor="description">
                Description:<br />
                <textarea 
                  id="description" 
                  name="description"
                  onChange={updateDescription}
                  value={description} /><br />
            </label>
            <button type="submit">Create project</button>
        </form>

        {/* Conditional rendering of messages */}
      {projects.length === 0 ? (
        <p>No projects added from the form</p>
      ) : (
        <>
          <h3>Projects submitted from the form:</h3>
          <ul>
            {projects.map((project, index) => (
              <pre key={index}>
                {/* {msg.name}:</strong> {msg.message} */}
                {JSON.stringify(project)}
              </pre>
            ))}
          </ul>
        </>
      )}
  
      </React.Fragment> 
    );
  }

