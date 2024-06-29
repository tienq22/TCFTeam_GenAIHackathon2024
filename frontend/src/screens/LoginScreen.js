
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../components/Loader";
import { useLoginMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";
import { toast } from "react-toastify";
import '../styles/login.css';  

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/main";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, redirect, navigate]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate(redirect);
    } catch (error) {
      toast.error(error?.data?.message);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h1 className="logo">ElisAI</h1>
        <h1>Đăng nhập ngay</h1>
        <p>Chào mừng bạn quay trở lại 👋</p>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Nhập địa chỉ Email của bạn"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="custom-placeholder"
            />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Mật khẩu</Form.Label>
            <Form.Control
              type="password"
              placeholder="Nhập mật khẩu của bạn"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="custom-placeholder"
            />
          </Form.Group>

          <div className="d-flex justify-content-between align-items-center">
            <Form.Check type="checkbox" label="Ghi nhớ mật khẩu" />
            <a href="#forgot-password" className="forgot-password">Quên mật khẩu?</a>
          </div>

          <Button variant="primary" type="submit" className="btn-login">
            Đăng Nhập
          </Button>

          {isLoading && <Loader />}

          <Row className="py-3">
            <Col className="register-link">
              Nếu bạn chưa có tài khoản? <Link to="/register">Đăng ký</Link>
            </Col>
          </Row>
        </Form>
      </div>
      <div className="image-container">
        <img src="/login.png" alt="Login Illustration" />
      </div>
    </div>
  );
};

export default LoginScreen;
