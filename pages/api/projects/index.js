import { projects } from "../../../data/projects";

export default (req, res) => {
  res.status(200).json(projects);
};
