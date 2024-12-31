import { useNavigate } from 'react-router-dom'
import { Navbar,Nav,Container,Badge, NavDropdown } from 'react-bootstrap'
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { useLogoutMutation } from '../slices/usersApiSlice'
import { logout } from '../slices/authSlice'
import SearchBox from './SearchBox'

const Header = () => {
    const { cartItems } = useSelector(state => state.cart)
    const { userInfo } = useSelector(state => state.auth)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [logoutApiCall] = useLogoutMutation()

    const logoutHandler = async () => {
        try {
            await logoutApiCall().unwrap()
            dispatch(logout())
            navigate('/auth')
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <header>
        <Navbar bg="dark" variant = "dark" expand="md" collapseOnSelect>
            <Container>
                <Link to="/" className="navbar-brand">
                    eShop
                </Link>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ms-auto'>
                        <SearchBox />
                        <Link to="/cart" className="nav-link">
                            <FaShoppingCart /> Cart
                            {cartItems.length > 0 && (
                                <Badge pill bg='success' style={{ marginLeft: '5px' }}>
                                    {cartItems.reduce((a, c) => a + c.qty, 0)}
                                </Badge>
                            )}
                        </Link>
                        { userInfo ? (
                            <NavDropdown title = {userInfo.name} id='username'>
                                 <NavDropdown.Item as={Link} to='/profile'>
                                    Profile
                                 </NavDropdown.Item>
                                <NavDropdown.Item onClick={logoutHandler}>
                                    Logout
                                </NavDropdown.Item>
                            </NavDropdown>
                        ) : (
                            <Link to="/auth" className="nav-link">
                                <FaUser />Sign In
                            </Link>
                    )}
                     {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <NavDropdown.Item as={Link} to='/admin/productlist'>
                    Products
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='/admin/orderlist'>
                    Orders
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='/admin/userlist'>
                    Users
                  </NavDropdown.Item>
                </NavDropdown>
              )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header