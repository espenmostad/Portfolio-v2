import Project from "./Project";
import { ProjectProps, ProjectsProps } from "./types";
import type { PropsWithChildren } from "react";


export default function Projects(
	props: Readonly<PropsWithChildren<ProjectsProps>>
) {
	const {children, onRemoveProjectButtonClicked, projects } = props;
	return (
		<section>
			<h2>Projects</h2>
			{children}
			{projects.length === 0 ? (
				<p>No projects available.</p>
			) : (
				<>
					<ul className="project-ul">
						{projects.map((project: ProjectProps) => (
							<li key={project.id}>
								<Project
									id={project.id}
									title={project.title}
									description={project.description}
								>
									<button
										onClick={() =>
											onRemoveProjectButtonClicked(
												project.id
											)
										}
									>
										Remove project
									</button>
								</Project>
							</li>
						))}
					</ul>
                    Total projects per category:
					<ul>
						{Object.entries(
							projects.reduce((prev, curr) => {
								prev[curr.category] =
									(prev[curr.category] || 0) + 1;
								return prev;
							}, {} as Record<string, number>)
						).map(([category, count]) => (
							<li key={category}>
								{category}: {count}
							</li>
						))}
					</ul>
				</>
			)}
		</section>
	);
}