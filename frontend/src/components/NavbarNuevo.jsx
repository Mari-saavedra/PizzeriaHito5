// import { formateaNumero } from '../utils/utiles.js'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

const NavbarNuevo = () => {
  // const total = 25000
  const token = false

  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <Container>
        <Navbar.Brand href='#'>Pizzería Mamma Mia!</Navbar.Brand>

        <Nav className='me-auto d-flex gap-2'>
          <Link to='/' className='text-decoration-none ms-3 text-white'>🍕 Home</Link>

          {token
            ? (
              <>
                <Link to='/profile' className='text-decoration-none ms-3 text-white'>Profile</Link>
                <Link to='/logout' className='text-decoration-none ms-3 text-white'>🔓 Logout</Link>
              </>
              )
            : (
              <>
                <Link to='/login' className='text-decoration-none ms-3 text-white'>Login</Link>
                <Link to='/register' className='text-decoration-none ms-3 text-white'>Register</Link>
              </>
              )}

        </Nav>
        {/*
        <Nav>
          <button type='button' className='btn btn-outline-warning fw-bold text-primary btn-sm'>
            🛒 Total: ${formateaNumero(total)}
          </button>
        </Nav>
        */}
      </Container>
    </Navbar>
  )
}

export default NavbarNuevo
