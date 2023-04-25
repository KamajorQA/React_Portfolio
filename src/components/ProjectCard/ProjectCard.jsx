import { Link } from 'react-router-dom';
import './projectCard.css';

function ProjectCard({ previewImg, title, slug }) {
  return (
    <li className="project">
      <Link to={`/projects/${slug}`}>
        <img src={previewImg} alt={title} className="project__img" />
        <h3 className="project__title">{title}</h3>
      </Link>
    </li>
  );
}

export default ProjectCard;
