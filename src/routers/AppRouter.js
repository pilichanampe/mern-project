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

export default function AppRouter() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/login" component={LoginPage}></Route>
          <Route exact path="/register" component={RegisterPage}></Route>
          <Route exact path="/account" component={AccountPage}></Route>
          <Route exact path="/projects" component={ProjectsPage}></Route>
          <Route exact path="/project/projectId" component={ProjectPage}></Route>
          <Route exact path="/admin/users" component={UsersPage}></Route>

          <Route path="*" component={NotFoundPage}></Route>
        </Switch>
      </Layout>
    </Router>
  )
}
