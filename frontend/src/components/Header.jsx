import { Navbar, Nav, Container, Badge, NavDropdown } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';
import logo from '../assets/logo.png';
import SearchBox from './SearchBox';
import { resetCart } from '../slices/cartSlice';

const Header = () => {
	const { cartItems } = useSelector((state) => state.cart);
	const { userInfo } = useSelector((state) => state.auth);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [logoutApiCall] = useLogoutMutation();

	const logoutHandler = async () => {
		try {
			await logoutApiCall().unwrap();
			dispatch(logout());
			dispatch(resetCart());
			navigate('/login');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<header>
			<Navbar bg='dark' variant='dark' expand='md' collapseOnSelect>
				<Container>
					<Navbar.Brand as={Link} to='/'>
						<img src={logo} alt='PCBay' />
					</Navbar.Brand>

					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ms-auto'>
							<SearchBox />
							<Nav.Link
								as={Link}
								to='/cart'
								style={{
									color: `${
										cartItems.length > 0 ? 'white' : 'var(--bs-navbar-color)'
									}`,
								}}>
								<FaShoppingCart /> Cart
								{cartItems.length > 0 && (
									<Badge pill bg='success' style={{ marginLeft: '5px' }}>
										{cartItems.reduce((a, c) => a + c.qty, 0)}
									</Badge>
								)}
							</Nav.Link>
							{userInfo ? (
								<NavDropdown title={userInfo.name} id='username'>
									<NavDropdown.Item as={Link} to='/profile'>
										Profile
									</NavDropdown.Item>
									<NavDropdown.Item onClick={logoutHandler}>
										Logout
									</NavDropdown.Item>
								</NavDropdown>
							) : (
								<Nav.Link as={Link} to='/login'>
									<FaUser /> Sign In
								</Nav.Link>
							)}
							{userInfo && userInfo.isAdmin && (
								<NavDropdown title='Admin' id='adminmenu'>
									<NavDropdown.Item as={Link} to='/admin/orderlist'>
										Orders
									</NavDropdown.Item>
									<NavDropdown.Item as={Link} to='/admin/productlist'>
										Products
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
	);
};

export default Header;
