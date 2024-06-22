import { memo, useState } from 'react';
import ModelAddSection from '../components/common/Models/ModelAddSection';
import SectionAccordionContainer from '../components/common/sectionAccordion/SectionAccordionContainer';
import { useDispatch } from 'react-redux';
import NoTaskOrSection from '../components/common/NoTaskOrSection';
import Loader from '../components/common/Loader';

function TodoMainSection({ project, section, title }) {
  const dispatch = useDispatch();
  const [isSectionModelOpen, setIsSectionModelOpen] = useState(false);
  const [activeSectionModal, setActiveSectionModal] = useState(0); // Kya section nu model open chhe.
  const [activeSections, setActiveSections] = useState([0]); // kyo section open chhe.

  // console.log('TodoMainSection => section: ', section);

  function handleClick(index) {
    if (activeSections.includes(index)) {
      setActiveSections(activeSections.filter((item) => item !== index));
    } else {
      setActiveSections((prev) => [...prev, index]);
    }
  }

  return (
    <div className="scrollbar md:w-[calc(100% - 64px)] lg:w-[calc(100% - 160px)] xl:w-[calc(100% - 384px)] flex h-full max-h-screen flex-col gap-2 overflow-y-scroll px-8 py-3 sm:px-12 md:px-8 lg:px-20 xl:px-48">
      <div className="flex w-full flex-col items-center justify-center gap-2">
        <h2 className="my-3 self-start text-3xl font-bold">
          {project?.project_name || title}
        </h2>


        {section.isLoading ? (
          <div className="flex h-full w-full items-center justify-center">
            <Loader />
          </div>
        ) : (
          <>
            {!section || section?.section?.length === 0 ? (
              <>
                <AddSectionButtonBackup
                  setIsSectionModelOpen={setIsSectionModelOpen}
                  index={0}
                  setWhichSectionModel={setActiveSectionModal}
                />
                {isSectionModelOpen && 0 === activeSectionModal && (
                  <ModelAddSection
                    setIsSectionModelOpen={setIsSectionModelOpen}
                    project_id={project?.project_id}
                  />
                )}
                <NoTaskOrSection />
              </>
            ) : (
              <>
                {section.section.map((section, index) => {
                  return (
                    <div key={index} className="w-full">
                      <SectionAccordionContainer
                        activeSections={activeSections}
                        handleClick={handleClick}
                        index={index}
                        project_id={project?.project_id}
                        section={section}
                      />

                      {isSectionModelOpen && index === activeSectionModal && (
                        <ModelAddSection
                          setIsSectionModelOpen={setIsSectionModelOpen}
                          project_id={project?.project_id}
                        />
                      )}
                      <AddSectionButtonBackup
                        setIsSectionModelOpen={setIsSectionModelOpen}
                        index={index}
                        setWhichSectionModel={setActiveSectionModal}
                      />
                    </div>
                  );
                })}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default memo(TodoMainSection);

function AddSectionButtonBackup({
  setIsSectionModelOpen,
  index,
  setWhichSectionModel,
}) {
  function openAddSectionModel() {
    setIsSectionModelOpen(true);
    setWhichSectionModel(index);
  }

  return (
    <button
      className="flex w-full cursor-pointer items-center gap-2 opacity-0 hover:opacity-100"
      onClick={openAddSectionModel}
    >
      <div className="grow bg-primary p-[0.5px]"></div>
      <h3 className="flex items-center gap-2 text-[13.5px] font-semibold text-primary">
        <span>Add Section</span>
      </h3>
      <div className="grow bg-primary p-[0.5px]"></div>
    </button>
  );
}

// // https://codesandbox.io/embed/github/Utkarshbhimte/beatiful-dnd-custom-placeholder/tree/master/?fontsize=14
