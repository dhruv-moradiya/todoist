import { Link } from 'react-router-dom';
import { ShowMore } from '../../constants/svg';
import { useDispatch } from 'react-redux';
import { deleteProject } from '../../redux/project/projectThunk';

function ProjectName(project) {
  const dispatch = useDispatch();

  function deleteProjectFun(id) {
    dispatch(deleteProject({ project_id: id }));
  }

  return (
    <>
      {project.project?.map((item, index) => (
        <Link to={`/${item.project_id}`} key={index}>
          <div className="flex cursor-pointer items-center justify-between rounded-md px-2 py-1 hover:bg-amber-hover-effect">
            <div className="flex items-center gap-2">
              <i className="ri-hashtag"></i>
              <p className="text-base font-semibold">{item.project_name}</p>
            </div>
            <button
              className="flex h-5 w-5 items-center justify-center rounded-[4px] p-3 hover:bg-dark"
              onClick={() => deleteProjectFun(item.project_id)}
            >
              {/* <ShowMore /> */}
              <i className="ri-delete-bin-3-line text-base"></i>
            </button>
          </div>
        </Link>
      ))}
    </>
  );
}

export default ProjectName;
