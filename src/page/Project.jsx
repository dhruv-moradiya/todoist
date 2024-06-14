import { useParams } from 'react-router-dom';
import TodoMainSection from './TodoMainSection';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getSection } from '../redux/thunk';
import { useDispatch } from 'react-redux';

function Project() {
  const { project_id } = useParams();
  const projects = useSelector((store) => store.todos.todos);

  const project = projects.find((item) => item.project_id === project_id);
  const dispatch = useDispatch()

  useEffect(() => {
    console.log("Project")
    dispatch(getSection(project_id))
  }, [])

  return <TodoMainSection project={project} />;
}

export default Project;
