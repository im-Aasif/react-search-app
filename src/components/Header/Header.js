import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>React-Apps</Navbar.Brand>
            <Nav className="justify-content-end">
                <Nav.Link><Link to="/search">Search</Link></Nav.Link>
                <Nav.Link><Link to="/task-tracker">Task Tracker</Link></Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default Header;