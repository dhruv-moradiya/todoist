import { memo } from 'react';
import { Check, HashTag, Inbox, Section } from '../../../constants/svg';
import CustomButton from '../CustomButton';

function ModelProjectSelect({ setIsProjectModelOpen, projectPath, setProjectPath }) {
  const section = [
    {
      project_name: 'Home',
      section_name: ['Routines', 'Inspiration'],
    },
    {
      project_name: 'Education',
      section_name: ['Routines', 'Exam'],
    },
  ];

  function handleClick(e, item, project_name) {
    e.stopPropagation()
    if (item === "Inbox") {
      setProjectPath(item)
    } else {
      console.log("first")
      setProjectPath(`${project_name}/${item}`)
    }

  }

  return (
    <div className="z-20 flex w-[280px] flex-col rounded-md bg-light-dark p-2 text-[13px] absolute top-full left-0">
      <CustomButton
        onClick={(e) => handleClick(e, "Inbox")}
        styles="flex items-center gap-2 p-1 hover:bg-dark rounded"
        buttonName={
          <>
            <div className="flex grow items-center gap-3">
              <span>
                <Inbox />
              </span>
              <span>Inbox</span>
            </div>
            <span className="">
              <Check />
            </span>
          </>
        }
      />
      <h3 className="my-2 font-semibold">My Projects</h3>
      <div>
        {section.map((item, index) => {
          return (
            <div key={item + index} className="flex flex-col gap-1 pr-4">
              <ProjectHeading heading={item.project_name} />
              <Sections item={item} onClick={(e, section) => handleClick(e, section, item.project_name)} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default memo(ModelProjectSelect);

function ProjectHeading({ heading }) {
  return (
    <h3 className="flex items-center gap-2">
      <span>
        <HashTag />
      </span>
      <span>{heading}</span>
    </h3>
  );
}

function Sections({ item, onClick }) {
  return (
    <>
      {item.section_name.map((section, index) => {
        return (
          <CustomButton
            key={index}
            styles="ml-3 flex w-full items-center gap-2 rounded p-1 font-semibold hover:bg-dark"
            onClick={(e) => onClick(e, section)}
            buttonName={
              <>
                <div className="flex grow items-center gap-3">
                  <span>
                    <Section />
                  </span>
                  <p key={section + index} className="">
                    {section}
                  </p>
                </div>
                <span className="">
                  <Check />
                </span>
              </>
            }
          />
        );
      })}
    </>
  );
}
