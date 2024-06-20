import { useParams } from 'react-router-dom';
import TodoMainSection from './TodoMainSection';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { getSection } from '../redux/section/sectionThunk';
<<<<<<< HEAD
import { getTask } from '../redux/task/taskThunk';
=======
>>>>>>> 67e6dd0f589a3c78f5b87dacf850c99af0b9fae7

function Project() {
  const dispatch = useDispatch();
  const param = useParams();

  const projects = useSelector((store) => store.project.project);
  const section = useSelector((store) => store.section);
<<<<<<< HEAD
  const task = useSelector((store) => store.task);
  console.log("task", task)

  const project = projects.find((item) => item.project_id === param.project_id);

  // console.log("Project => Task: ", task)
  useEffect(() => {
    dispatch(getTask({ project_id: param.project_id }));
  }, [param, section])

  useEffect(() => {
    dispatch(getSection(param.project_id));
=======

  const project = projects.find((item) => item.project_id === param.project_id);

  useEffect(() => {
    dispatch(getSection(param ? param.project_id : 'inbox'));
>>>>>>> 67e6dd0f589a3c78f5b87dacf850c99af0b9fae7
  }, [param]);

  return <TodoMainSection project={project} section={section} />;
}

export default Project;
