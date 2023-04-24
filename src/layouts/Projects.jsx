import ProjectCard from '../components/ProjectCard/ProjectCard';
import projectsList from '../utilities/projectsList';

function Projects() {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {projectsList.map((elem) => {
            return <ProjectCard {...elem} key={elem.slug} />;
          })}
        </ul>
      </div>
    </main>
  );
}

export default Projects;
