import React, { memo } from 'react';
import SectionAccordion from './SectionAccordion';

function SectionAccordionContainer({
  tasks = [1, 2, 3, 4],
  activeSections,
  handleClick,
  index,
}) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-2">
      <SectionAccordion
        key={index}
        activeSections={activeSections}
        handleClick={handleClick}
        index={index}
        tasks={tasks}
      />
    </div>
  );
}

export default memo(SectionAccordionContainer);
