import React from "react";
import { useParams } from "react-router-dom";
import Udja from "./Udja";

const projects = {
  udja: {
    id: "udja",
    page: <Udja />,
  },
};

function Projects() {
  const params = useParams<{ id: keyof typeof projects }>();
  console.log(params);

  return <div>{projects[params.id].page}</div>;
}

export default Projects;
