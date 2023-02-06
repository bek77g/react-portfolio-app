import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Projects() {
  const [projects, setProjects] = useState([]);

  const getProjects = () => {
    axios
      .get('http://localhost:8080/projects')
      .then((response) => setProjects(response.data));
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <main className='section'>
      <div className='container'>
        <h2 className='title-1'>Projects</h2>
        <ul className='projects'>
          {projects.map((project) => (
            <li key={project.id} className='project'>
              <Link to={`projects/${project.id}`}>
                <img
                  src={project.previewPicture}
                  alt={project.title}
                  className='project__img'
                />
                <h3 className='project__title'>{project.title}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Projects;
