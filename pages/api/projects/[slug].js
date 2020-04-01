import { projects } from "../../../data/projects";

export default ({ query: { slug } }, res) => {
  const filtered = projects.filter(p => p.slug === slug);

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: `Project ${slug} not found.` });
  }
};
