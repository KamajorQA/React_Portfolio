import ProjectCard from '../components/ProjectCard/ProjectCard';
import projectsList from '../utilities/projectsList';

function Projects() {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          <ProjectCard imgLink={projectsList[0].previewImg} />
          <ProjectCard imgLink={projectsList[1].previewImg} />
          <ProjectCard imgLink={projectsList[2].previewImg} />
          <ProjectCard imgLink={projectsList[3].previewImg} />
        </ul>
      </div>
    </main>
  );
}

export default Projects;
