import { useParams } from 'react-router-dom';
import TodoMainSection from './TodoMainSection';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { getSection } from '../redux/section/sectionThunk';
import { getTask } from '../redux/task/taskThunk';

function Project() {
  const dispatch = useDispatch();
  const param = useParams();

  const projects = useSelector((store) => store.project.project);
  const section = useSelector((store) => store.section);
  const task = useSelector((store) => store.task);
  console.log("task", task)

  const project = projects.find((item) => item.project_id === param.project_id);

  // console.log("Project => Task: ", task)
  useEffect(() => {
    dispatch(getTask({ project_id: param.project_id }));
  }, [param, section])

  useEffect(() => {
    dispatch(getSection(param.project_id));
  }, [param]);

  return <TodoMainSection project={project} section={section} />;
}

export default Project;
