import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getSection } from '../redux/section/sectionThunk';

import TodoMainSection from './TodoMainSection';

function Inbox() {
  const dispatch = useDispatch();

  const section = useSelector((store) => store.section);

  useEffect(() => {
    dispatch(getSection('inbox'));
  }, []);

  return <TodoMainSection project={null} section={section} title="Inbox" />;
}

export default Inbox;

// https://codesandbox.io/embed/github/Utkarshbhimte/beatiful-dnd-custom-placeholder/tree/master/?fontsize=14
