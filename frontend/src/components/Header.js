import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Navbar,
  Nav,
  Container,
  NavbarCollapse,
  NavbarToggle,
  NavbarBrand,
  NavLink,
  NavDropdown,
} from "react-bootstrap";
import { toast } from "react-toastify";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";
import { FaUser } from "react-icons/fa";

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (error) {
      toast.error(error?.data?.message);
    }
  };

  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='md' collapseOnSelect>
        <Container>
          <NavbarBrand as={Link} to='/'>
            ElisAI
          </NavbarBrand>
          <NavbarToggle aria-controls='basic-navbar-nav' />
          <NavbarCollapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              {userInfo ? (
                <NavDropdown title={userInfo?.name} id='username'>
                  <NavDropdown.Item as={Link} to='/profile'>
                    Trang cá nhân
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Đăng xuất
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <NavLink as={Link} to='/'>
                  <FaUser /> Đăng nhập
                </NavLink>
              )}
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
