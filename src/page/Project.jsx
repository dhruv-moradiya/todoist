import { useParams } from 'react-router-dom';
import TodoMainSection from './TodoMainSection';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { getSection } from '../redux/section/sectionThunk';

function Project() {
  const dispatch = useDispatch();
  const param = useParams();

  const projects = useSelector((store) => store.project.project);
  const section = useSelector((store) => store.section);

  const project = projects.find((item) => item.project_id === param.project_id);

  useEffect(() => {
    dispatch(getSection(param ? param.project_id : 'inbox'));
  }, [param]);

  return <TodoMainSection project={project} section={section} />;
}

export default Project;
