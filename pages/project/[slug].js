import Head from "../../components/Head";
import { getLayout } from "../../components/Layout/PageLayout";
import { getAllProjects, getProjectBySlug } from "../../lib/api";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Image from "../../components/Image";
import styles from "../../styles/Project.module.scss";

export default function Project({ project }) {
  return (
    <div className={styles.project}>
      <Head title={project.title} />

      <div className={styles.content}>
        <ReactMarkdown>{project.intro}</ReactMarkdown>
      </div>
      <div className={styles.featureImage}>
        <Image
          src={project.featureImage}
          alt={`Image of the ${project.title.replace(/^t|The./, "")} project`}
        />
      </div>
      <div className={styles.content}>
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
          {project.details}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const project = getProjectBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "featureImage",
    "description",
    "content",
  ]);

  const [intro, details] = project.content.split("<!-- image -->");

  return {
    props: {
      project: {
        ...project,
        intro,
        details,
      },
    },
  };
}

export async function getStaticPaths() {
  const projects = getAllProjects(["slug"]);
  return {
    paths: projects.map((project) => {
      return {
        params: {
          slug: project.slug,
        },
      };
    }),
    fallback: false,
  };
}

// export async function getStaticProps({ params }) {
//   const recipe = getRecipeBySlug(params.slug, [
//     "title",
//     "date",
//     "slug",
//     "flavor",
//     "content",
//     "image",
//     "coverImage",
//     "filter",
//   ]);
//   const content = await markdownToHtml(recipe.content || "");

//   const recipesByFilter = getAllRecipesByFilter(
//     ["title", "slug", "flavor", "content", "image", "coverImage", "filter"],
//     recipe.filter
//   );
//   console.log(recipesByFilter);

//   return {
//     props: {
//       recipe: {
//         ...recipe,
//         content,
//       },
//       recommended: recipesByFilter,
//     },
//   };
// }

Project.getLayout = getLayout;
