import React from "react";
import TagItem, { ITag } from "./tag-item";

interface ProjectItemProps {
  title: string;
  image: string;
  url: string;
  tags: ITag[];
  description: React.ReactNode;
}

function ProjectItem(props: ProjectItemProps) {
  return (
    <article className="project-item">
      <img src={props.image} alt={props.title} />

      <h3>{props.title}</h3>
      {props.description}

      <footer>
        {props.tags.map((tag) => (
          <TagItem {...tag} />
        ))}
      </footer>
    </article>
  );
}

export default ProjectItem;
