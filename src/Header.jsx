import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { RiLoginCircleLine } from "react-icons/ri";
import { logoutUser } from './redux/action';
// import { IoPersonOutline } from "react-icons/io5";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isAuthenticated, user, error, message } = useSelector((state) => state.auth);

    const logoutHandle = (e) => {
        e.preventDefault();
        dispatch(logoutUser());
    };

    useEffect(() => {
        if (error) {
            alert(error);
            dispatch({ type: "CLEAR_ERRORS" });
        };
        if (message) {
            alert(message);
            dispatch({ type: "CLEAR_MESSAGE" });
        }else{
            navigate("/login");
        }
    }, [error, message, dispatch, navigate]);

    return (
        <div className='d-flex align-items-center justify-content-between p-3 bg-warning' style={{ height: "10vh" }}>
            <div className="logo">
                <Link to="/" className='h2'>Test 01</Link>
            </div>
            <ul className="list-unstyled d-flex align-items-center justify-content-center">
                <li><Link to="/" className='mx-2 h5'>Home</Link></li>
                <li><Link to="/" className='mx-2 h5'>Users</Link></li>
                <li><Link to="/" className='mx-2 h5'>About</Link></li>
            </ul>
            <div className='btn-group'>
                {!isAuthenticated ? (
                    <Link to="/login">
                        <RiLoginCircleLine className='h3' />
                    </Link>
                ) : (
                    <button className='btn' onClick={logoutHandle}>
                        {/* <IoPersonOutline className='h3' /> */}
                        {user && user.avatar && (<img style={{ height: "3vmax", width: "3vmax", borderRadius: "50%" }} src={user.avatar.url} alt={user.name} />)}
                    </button>
                )}
            </div>
        </div>
    )
}

export default Header;
