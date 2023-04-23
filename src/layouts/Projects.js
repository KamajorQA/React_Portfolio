import reactNews from '../assets/img/projects/01.jpg';
import greedyDragons from '../assets/img/projects/02.jpg';
import greenCorp from '../assets/img/projects/03.jpg';

function Projects() {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          <li className="project">
            <a href="./project-page.html">
              <img
                src={reactNews}
                alt="React News portal img"
                className="project__img"
              />
              <h3 className="project__title">
                Fully functional News Portal as SPA on React
              </h3>
            </a>
          </li>
          <li className="project">
            <a href="./project-page.html">
              <img
                src={greedyDragons}
                alt="Greedy Dragons Project img"
                className="project__img"
              />
              <h3 className="project__title">
                Dragonomicon project with CRUD-operations on vanilla JavaScript
              </h3>
            </a>
          </li>
          <li className="project">
            <a href="./project-page.html">
              <img
                src={greenCorp}
                alt="GreenCorp Landing Page img"
                className="project__img"
              />
              <h3 className="project__title">Landing page</h3>
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default Projects;
