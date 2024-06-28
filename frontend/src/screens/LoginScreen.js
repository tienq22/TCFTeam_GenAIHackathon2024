import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import FormContainer from "../components/FormContainer.js";
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
      console.log(error);
      toast.error(error?.data?.message);
    }
  };
  
  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-header">
          <h1>Đăng nhập ngay!!</h1>
          <p>Chào mừng bạn quay trở lại 👋</p>
        </div>
        <Form>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Nhập địa chỉ Email của bạn" className="custom-placeholder" />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Mật khẩu</Form.Label>
            <Form.Control type="password" placeholder="Nhập mật khẩu của bạn" className="custom-placeholder" />
          </Form.Group>
          
          <div className="remember-me">
            <Form.Check type="checkbox" label="Ghi nhớ mật khẩu" />
          </div>
          
          <div className="forgot-password">
            <a href="#forgot-password">Quên mật khẩu?</a>
          </div>

          <Button variant="primary" type="submit" className="btn-login">
            Đăng Nhập
          </Button>
          
          
          <div className="register-link">
            <p>Nếu bạn chưa có tài khoản? Hãy tạo tài khoản <a href="#register">Đăng ký</a></p>
          </div>
        </Form>
      </div>
      <div className="image-container">
        <img src="/login-image.png" alt="Login Illustration" />
      </div>
    </div>
  );
};

export default LoginScreen;



