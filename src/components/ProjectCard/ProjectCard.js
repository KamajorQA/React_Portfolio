import './projectCard.css';

function ProjectCard({ imgLink }) {
  return (
    <li className="project">
      <a href="./project-page.html">
        <img
          src={imgLink}
          alt="React News portal img"
          className="project__img"
        />
        <h3 className="project__title">
          Fully functional News Portal as SPA on React
        </h3>
      </a>
    </li>
  );
}

export default ProjectCard;
