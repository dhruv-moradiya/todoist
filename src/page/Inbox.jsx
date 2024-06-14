import { useEffect, useState } from 'react';
import { fetchUserData } from '../redux/userSlice';
import TodoMainSection from './TodoMainSection';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

function Inbox() {
  const [data, setData] = useState([1, 2, 3, 4]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchUserData(JSON.parse(localStorage.getItem('todoist_user')).id)
      // fetchUserData("keoAMbgWq7bYEqgMrJztBaT0cxC3")
    );
  }, []);

  return <TodoMainSection title="Inbox" />;
}

export default Inbox;

// // https://codesandbox.io/embed/github/Utkarshbhimte/beatiful-dnd-custom-placeholder/tree/master/?fontsize=14
