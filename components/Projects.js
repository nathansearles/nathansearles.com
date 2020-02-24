import { useState, useEffect, useRef } from "react";
import theme from "../styles/_variables";
import Project from "../components/Project";

const Projects = props => {
  return (
    <div className="Projects">
      {props.projects.map(project => (
        <Project key={project.slug} {...project} />
      ))}

      <style jsx>{`
        .Projects {
          display: grid;
          grid-template-columns: 1fr;
          column-gap: 24px;
          row-gap: 24px;

          @media (${theme.breakpoint.md}) {
            grid-template-columns: repeat(2, 1fr);
          }

          @media (${theme.breakpoint.lg}) {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;
