import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  const user = useSelector((store) => store.user.userData)
  console.log("user", user);

  useEffect(() => {
    console.log("Protected UseEffect");
    if (!user) {
      navigate('/login');
    } else {
      navigate('/');
    }
  }, [user]);

  return user ? children : null;
}

export default ProtectedRoute;
