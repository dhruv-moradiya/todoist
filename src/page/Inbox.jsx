import { useEffect } from 'react';

import TodoMainSection from './TodoMainSection';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getSection } from '../redux/section/sectionThunk';

function Inbox() {
  const dispatch = useDispatch();

  const section = useSelector((store) => store.section);
  console.log('sectionInbox', section);

  useEffect(() => {
    dispatch(getSection('inbox'));
  }, []);

  return <TodoMainSection project={null} section={section} title="Inbox" />;
}

export default Inbox;

// https://codesandbox.io/embed/github/Utkarshbhimte/beatiful-dnd-custom-placeholder/tree/master/?fontsize=14
