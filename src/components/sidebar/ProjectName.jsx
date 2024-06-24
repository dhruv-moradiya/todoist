import { Link } from 'react-router-dom';
import { ShowMore } from '../../constants/svg';

function ProjectName(project) {
  // console.log('project', project);
  return (
    <>
      {project.project?.map((item, index) => (
        <Link to={`/${item.project_id}`} key={index}>
          <div className="flex cursor-pointer items-center justify-between rounded-md px-2 py-1 hover:bg-amber-hover-effect">
            <div className="flex items-center gap-2">
              <i className="ri-hashtag"></i>
              <p className="text-base font-semibold">{item.project_name}</p>
            </div>
            {/* <span className="material-symbols-outlined rounded-[3px] font-light hover:bg-[#80808024]">
              more_horiz
            </span> */}
            <ShowMore />
          </div>
        </Link>
      ))}
    </>
  );
}

export default ProjectName;
