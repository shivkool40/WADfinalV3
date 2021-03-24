import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  Navbar, Nav, NavDropdown,
} from 'react-bootstrap';
import { BsDisplay } from 'react-icons/bs';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Journal from './Journal'
import Display from './Display'
import Delete from './Delete'

function App() {
  return (
    <Router>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Money Journey</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/journal">Input</Link>
            <Link to="/Display">Display List</Link>
            <Link to="/Delete">Delete</Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Link to="#deets">More deets</Link>
            <Link eventKey={2} Link to="#memes">
              Sign Out</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route path="/journal">
          <Journal />
        </Route>
        <Route path="/Display">
          <Display />
        </Route>
        <Route path="/Delete">
          <Delete />
        </Route>
        <Route path="/">
          <h3>below is putting the input</h3>
          <Journal />
        </Route>
      </Switch>
    </Router>
  );
}

function CategoryManagement() {
  return (
    <h1>Category Management</h1>
  )
}



function Home() {
  return (
    <h1>Home</h1>
  )
}
export default App;
