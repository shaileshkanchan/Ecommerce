
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "./cart.css";

const NavBar = () => {
  const getdata = useSelector((state) => state.cartreducer.carts);
  console.log(getdata)

  //   <Navbar bg="dark" variant='dark' expand="lg">
  //   <Container fluid>
  //     <Navbar.Brand >React-Redux</Navbar.Brand>
  //     <Nav>
  //         <Nav.Link to="/" as={Link}>Products</Nav.Link>


  //       </Nav>
  //       <Navbar.Toggle/>
  //     <Navbar.Collapse className="justify-content-end">
  //       <Navbar.Text>
  //           <Nav.Link to="/cart" as={Link}>My Cart {getdata.length}</Nav.Link>
  //       </Navbar.Text>
  //     </Navbar.Collapse>
  //   </Container>
  // </Navbar>
  return (
    <>
      <header className='header'>
        <div className='header-div'>
        <h3>React Redux</h3>
        <ul>
          <li><Link to="/" style={{color:'white'}}>Products</Link></li>
          </ul>
        </div>
          
        <nav className='nav'>
         
          <ul>
            <li><Link to="/cart" style={{color:'white' }}>My Cart<span style={{margin:"0.5rem"}}>{getdata.length}</span></Link></li>
            </ul>
            
        </nav>
      </header>
    </>
  )
}
export default NavBar;