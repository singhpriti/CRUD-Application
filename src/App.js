import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Notfound from './components/pages/Notfound';
import AddUser from './components/user/AddUser';
import EditUser from './components/user/EditUser';
import View from './components/user/View';


function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/About" component={About} />
            <Route exact path="/user/AddUser" component={AddUser} />
            <Route exact path="/user/EditUser/:id" component={EditUser} />
            <Route exact path="/user/:id" component={View} />
            <Route component={Notfound} />

          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
