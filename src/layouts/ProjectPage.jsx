import { useParams } from 'react-router-dom';
import {
  faAnglesLeft,
  faUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';
import { faFilePowerpoint } from '@fortawesome/free-regular-svg-icons';
import gitHubBlack from '../assets/img/icons/gitHub-black.svg';
import projectsList from '../utilities/projectsList';
import ButtonOutline from '../components/ButtonOutline/ButtonOutline';

function ProjectPage() {
  const { slug } = useParams();
  const currentProject = projectsList.find((elem) => elem.slug === slug);
  return (
    <main className="section">
      <div className="container">
        <section className="controls">
          <ButtonOutline
            faIcon={faAnglesLeft}
            btnDesc={'назад'}
            btnLink={'/projects'}
            inner
          />
        </section>
        <div className="project-details">
          <h1 className="title-1">{currentProject.title}</h1>
          <img
            src={currentProject.bigImg}
            alt={currentProject.title}
            className="project-details__cover"
          />

          <div className="project-details__desc">
            <h4>{currentProject.description}</h4>
            <p>{currentProject.details}</p>
            <p>Stack: {currentProject.stack}</p>
          </div>
          <ButtonOutline
            faIcon={faUpRightFromSquare}
            btnDesc={'Visit project site'}
            btnLink={currentProject.deployLink}
          />
          <ButtonOutline
            localIcon={gitHubBlack}
            btnDesc={'Code on GitHub'}
            btnLink={currentProject.gitHubLink}
          />
          {currentProject.presentation && (
            <ButtonOutline
              faIcon={faFilePowerpoint}
              btnDesc={'View presentation'}
              btnLink={currentProject.presentation}
            />
          )}
        </div>
      </div>
    </main>
  );
}

export default ProjectPage;
