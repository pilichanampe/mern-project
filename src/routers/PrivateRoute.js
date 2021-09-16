import { Route, Redirect } from 'react-router-dom';
import useAuth from '../auth/useAuth';

export default function PrivateRoute({hasRole: role, ...rest}) {
  // const user = null;
  // const user = { id: 1, role: 'regular'};
  const { hasRole, isLogged } = useAuth();

  if(role && !hasRole(role)) return <Redirect to={routes.home} />
  if(!isLogged()) return <Redirect to={routes.login} />
  return (
    <Route {...rest} />
  )
}
