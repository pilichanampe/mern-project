import { Route, Redirect } from 'react-router-dom';
import useAuth from '../auth/useAuth';

export default function PublicRoute(props) {
  // const user = null;
  // const user = { id: 1, role: 'regular'};
  const { user } = useAuth();

  if(user) return <Redirect to="/projects" />
  return (
    <Route {...props} />
  )
}
