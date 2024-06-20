import { memo, useEffect, useState } from 'react';
import { Check, HashTag, Inbox, Section } from '../../../constants/svg';
import CustomButton from '../CustomButton';
import { collection, doc, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../../../firebase/Firebase';

function ModelProjectSelect({ setIsProjectModelOpen, setProjectPath }) {
  const [pathData, setPathData] = useState(null);

  async function getPathData() {
    const user = JSON.parse(localStorage.getItem('todoist_user'));
    if (!user) {
      console.log('No user found.');
      return;
    }

    const userRef = doc(db, 'user', user.id);
    const projectCollectionRef = collection(userRef, 'project');

    try {
      const snapShot = await getDocs(
        query(projectCollectionRef, orderBy('project_name', 'asc'))
      );

      const temp = [];

      snapShot.forEach(async (docs) => {
        const projectData = {
          project_id: docs.id,
          ...docs.data(),
          section: [],
        };

        const sectionCollectionRef = collection(docs.ref, 'section');
        const sectionSnapShot = await getDocs(
          query(sectionCollectionRef, orderBy('section_name', 'asc'))
        );

        sectionSnapShot.forEach((sectionDoc) => {
          projectData.section.push({
            section_id: sectionDoc.id,
            ...sectionDoc.data(),
          });
        });
        temp.push(projectData);
        setPathData(temp);
        console.log('temp', temp);
      });
    } catch (error) {
      console.error('Error: ', error);
    }
  }
  console.log('pathData', pathData);

  useEffect(() => {
    getPathData();
  }, []);

  function handleClick(e, section, project) {
    console.log('section', section);
    e.stopPropagation();
    if (section.section_name === 'Inbox') {
      setProjectPath(section);
    } else {
      // setProjectPath(`${project_name}/${section_name}`);
      setProjectPath({
        section,
        project,
      });
    }
    setIsProjectModelOpen(false);
  }

  if (!pathData) return null;

  return (
    <div
      className="scrollbar absolute left-0 top-full z-20 flex h-[200px] w-[280px] flex-col overflow-y-scroll rounded-md bg-light-dark p-2 text-[13px]"
      onClick={(e) => e.stopPropagation()}
    >
      <CustomButton
        onClick={(e) => handleClick(e, 'Inbox')}
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
        {pathData.map((item) => {
          return (
            <div key={item.project_id} className="flex flex-col gap-1 pr-4">
              <ProjectHeading heading={item.project_name} />
              <Sections
                item={item.section}
                onClick={(e, section) => handleClick(e, section, item)}
              />
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
      {item.map((section, index) => {
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
                  <p key={section.section_id} className="">
                    {section.section_name}
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
