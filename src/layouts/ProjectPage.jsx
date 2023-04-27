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
  const projectDetailsArray = currentProject.details.split('. ');
  return (
    <main className="section section--projectPage">
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
            <div className={'project-details__desc--separator'}>
              {projectDetailsArray.map((detailedRow, index) => {
                return (
                  <p
                    className="project-details__desc--prolix"
                    key={index}
                  >{`${detailedRow}.`}</p>
                );
              })}
            </div>
            <p>Stack: {currentProject.stack}</p>
          </div>
          <section className="controls controls--links">
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
          </section>
        </div>
      </div>
    </main>
  );
}

export default ProjectPage;
