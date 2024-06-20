import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function ProtectedRoute({ user, children }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    } else {
      navigate('/');
    }
  }, [user]);

  return user ? children : null;
}

export default ProtectedRoute;
