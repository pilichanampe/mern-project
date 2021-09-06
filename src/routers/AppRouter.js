import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from '../components/layouts/Layout';
import AccountPage from '../pages/AccountPage';
import UsersPage from '../pages/admin/UsersPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import NotFoundPage from '../pages/NotFoundPage';
import ProjectPage from '../pages/ProjectPage';
import ProjectsPage from '../pages/ProjectsPage';
import RegisterPage from '../pages/RegisterPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export default function AppRouter() {
  return (
    <Router>
      <Layout>
        <Switch>
          <PublicRoute exact path="/" component={HomePage}></PublicRoute>
          <PublicRoute exact path="/login" component={LoginPage}></PublicRoute>
          <PublicRoute exact path="/register" component={RegisterPage}></PublicRoute>
          <PrivateRoute exact path="/account" component={AccountPage}></PrivateRoute>
          <PrivateRoute exact path="/projects" component={ProjectsPage}></PrivateRoute>
          <PrivateRoute exact path="/project/projectId" component={ProjectPage}></PrivateRoute>
          <PrivateRoute exact path="/admin/users" component={UsersPage}></PrivateRoute>

          <Route path="*" component={NotFoundPage}></Route>
        </Switch>
      </Layout>
    </Router>
  )
}
