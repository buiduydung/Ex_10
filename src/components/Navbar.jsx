import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-dark">
      <Container fluid>
        <Navbar.Brand href="#" className="text-light fw-bold">
          Pizza House
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="  ms-auto my-2 my-lg-0 "
            style={{ maxHeight: "100px" }}
          >
            <Nav.Link href="#action1" className="text-light">
              Home
            </Nav.Link>
            <Nav.Link href="#action2" className="text-light">
              About Us
            </Nav.Link>
            <Nav.Link href="#action2" className="text-light">
              Contact
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="search-input me-2"
              aria-label="Search"
            />
            <Button variant="danger">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
