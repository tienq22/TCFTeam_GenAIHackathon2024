import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import FormContainer from "../components/FormContainer";
import Loader from "../components/Loader";
import { useRegisterMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";
import { toast } from "react-toastify";
import "./styles/registerScreen.css";
import img_regis from "../asset/img-register.png";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterMutation();

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
    if (password !== confirmPassword) {
      toast.error("Mật khẩu không khớp");
    } else {
      try {
        const res = await register({ name, email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate(redirect);
      } catch (error) {
        toast.error(error?.data?.message);
      }
    }
  };
  return (
    <FormContainer className='container'>
      <div className='col col-half'>
        <h1 className='title-h1'>Đăng Ký Ngay</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId='name' className='my-3'>
            <Form.Label className='font-bold'>Tên</Form.Label>
            <Form.Control
              className='box'
              type='text'
              placeholder='Nhập tên'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId='email' className='my-3'>
            <Form.Label className='font-bold'>Email</Form.Label>
            <Form.Control
              className='box'
              type='email'
              placeholder='Nhập email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId='password' className='my-3'>
            <Form.Label className='font-bold'>Mật khẩu</Form.Label>
            <Form.Control
              className='box'
              type='password'
              placeholder='Nhập mật khẩu'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId='confirmPassword' className='my-3'>
            <Form.Label className='font-bold'>Xác nhận mật khẩu</Form.Label>
            <Form.Control
              className='box'
              type='password'
              placeholder='Nhập lại mật khẩu'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          <Button
            type='submit'
            variant='primary'
            className='btn-register'
            disabled={isLoading}
          >
            Đăng ký
          </Button>

          {isLoading && <Loader />}
        </Form>

        <Row className='py-3'>
          <Col>
            Đã có tài khoản?{" "}
            <Link to={redirect ? `/?redirect=${redirect}` : "/"}>
              Đăng nhập
            </Link>
          </Col>
        </Row>
      </div>
      <div className=' col col-half'>
        <img src={img_regis} alt='Name' class='register-img'></img>
      </div>
    </FormContainer>
  );
};

export default RegisterScreen;
