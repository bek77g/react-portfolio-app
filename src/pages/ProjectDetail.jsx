import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

//media
import gitHubIcon from '../assets/icons/gitHub-black.svg';

function ProjectDetail() {
  const { id } = useParams();
  const [data, setData] = useState({});

  const { title, fullPisture, skills, githubLink } = data;

  const getProjectData = () => {
    axios
      .get(`http://localhost:8080/projects/${id}`)
      .then((res) => setData(res.data));
  };

  useEffect(() => {
    getProjectData();
  }, []);

  return (
    <main className='section'>
      <div className='container'>
        <div className='project-details'>
          <h1 className='title-1'>{title}</h1>
          <img
            src={fullPisture}
            alt={title}
            className='project-details__cover'
          />
          <div className='project-details__desc'>
            <p>
              Skills:{' '}
              {skills?.map(
                (skill, idx) => `${skill}${skills.length > idx + 1 ? ', ' : ''}`
              )}
            </p>
          </div>

          <a target={'_blank'} href={githubLink} className='btn-outline'>
            <img src={gitHubIcon} alt='ICON' />
            GitHub repo
          </a>
        </div>
      </div>
    </main>
  );
}

export default ProjectDetail;
