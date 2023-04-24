import './projectCard.css';

function ProjectCard({ previewImg, title, description, details, stack }) {
  return (
    <li className="project">
      <a href="./project-page.html">
        <img src={previewImg} alt={title} className="project__img" />
        <h3 className="project__title">{title}</h3>
        {/* <h4>{description}</h4> */}
        {/* {details && <p>{details}</p>}
        <p>{stack}</p> */}
      </a>
    </li>
  );
}

export default ProjectCard;
