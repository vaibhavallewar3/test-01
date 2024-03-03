import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from './redux/action';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, loading } = useSelector((state) => state.auth);

  const loginHandle = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
  };

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch({ type: "CLEAR_ERRORS" });
    }else{
      navigate("/");
    }
  }, [error, dispatch, navigate]);

  return (
    <div className='d-flex align-items-center justify-content-center' style={{ height: "90vh" }}>
      <form className="w-50 border rounded p-4" onSubmit={loginHandle}>
        <h2 className="h2 text-center">Login</h2>
        <dl>
          <dt>Mail ID</dt>
          <dd><input type="email" name="email" className='form-control' placeholder='Mail ID' onChange={(e) => setEmail(e.target.value)} /></dd>
          <dt>Password</dt>
          <dd><input type="password" name="password" className='form-control' placeholder='Password' onChange={(e) => setPassword(e.target.value)} /></dd>
        </dl>
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary w-25" type='submit' disabled={loading}>Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login;
