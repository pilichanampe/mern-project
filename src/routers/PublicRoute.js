import { Route, Redirect } from 'react-router-dom';
import useAuth from '../auth/useAuth';

export default function PublicRoute(props) {
  // const user = null;
  // const user = { id: 1, role: 'regular'};
  const { isLogged } = useAuth();

  if(isLogged()) return <Redirect to={routes.projects} />
  return (
    <Route {...props} />
  )
}
