import greedyDragonsBig from '../assets/img/projects/02-big.jpg';
import gitHubBlack from '../assets/img/icons/gitHub-black.svg';
import ButtonOutline from '../components/ButtonOutline/ButtonOutline';

function ProjectPage() {
  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">Project title</h1>

          <img
            src={greedyDragonsBig}
            alt=""
            className="project-details__cover"
          />

          <div className="project-details__desc">
            <p>Stack: React, HTML, CSS</p>
          </div>
          <ButtonOutline
            btnDesc={'Visit project site'}
            btnLink={'http://localhost:3000/'}
          />
          <ButtonOutline
            icon={gitHubBlack}
            btnDesc={'Code on GitHub'}
            btnLink={'http://localhost:3000/'}
          />
          <ButtonOutline
            btnDesc={'View presentation'}
            btnLink={'http://localhost:3000/'}
          />
        </div>
      </div>
    </main>
  );
}

export default ProjectPage;
