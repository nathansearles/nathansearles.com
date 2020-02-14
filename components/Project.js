import theme from "../styles/_variables";
import Link from "next/link";
import Image from "../components/Image";
import { useHover } from "../utilities";

const Project = props => {
  const [ref, hovered] = useHover();

  return (
    <div className="Project" key={props.slug}>
      <Link
        scroll={false}
        href="/projects/[slug]"
        as={`/projects/${props.slug}`}
      >
        <a ref={ref}>
          <div className="Thumbnail aspect aspect__square">
            <Image
              src={props.thumbnail}
              alt={props.name}
              aspectRatio={"square"}
              hovering={hovered}
              hoverable
            />
          </div>
          <h2>{props.name}</h2>
          <p>{props.desc}</p>
        </a>
      </Link>
      <style jsx>{`
        .Project {
          margin: 16px 0;
          text-align: center;

          h2 {
            font-weight: ${theme.font.bold};
            font-size: 1rem;
            margin: 8px 0 0;
            line-height: 2.5rem;
            color: ${theme.color.black};
          }

          p {
            margin: 0;
            font-size: 16px;
            color: ${theme.color.secondary};
            @media (${theme.breakpoint.md}) {
              opacity: 0;
              transform: translateY(8px);
              transition: transform 350ms cubic-bezier(0.25, 0.46, 0.45, 0.94)
                  100ms,
                opacity 350ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 100ms;
            }
          }

          a {
            position: relative;
            display: block;
            text-decoration: none;

            &:hover,
            &:active,
            &:focus {
              text-decoration: none;
              @media (${theme.breakpoint.md}) {
                h2 {
                  color: ${theme.color.black};
                }

                p {
                  opacity: 1;
                  transform: translateY(0%);
                }
              }
            }
          }

          .Thumbnail {
            overflow: hidden;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04),
              0 2px 4px rgba(0, 0, 0, 0.04), 0 4px 8px rgba(0, 0, 0, 0.04),
              0 8px 16px rgba(0, 0, 0, 0.04), 0 16px 32px rgba(0, 0, 0, 0.04),
              0 32px 64px rgba(0, 0, 0, 0.04);
            transition: transform 450ms cubic-bezier(0.25, 0.46, 0.45, 0.94)
              100ms;
            transform: scale(1);
          }

          .Thumbnail {
            ${hovered ? `transform: scale(1.045);` : ""}
          }
        }
      `}</style>
    </div>
  );
};

export default Project;
