import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserComp from './UserComp';
import { getAllUsers } from './redux/action';

const Home = () => {

  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <Fragment>
      {loading ? "Loading" : (
        <div className='p-1'>
          <h1 className="h1 text-center">All Users</h1>
          <div className="d-flex flex-wrap">
            {users && users.map((user, idx) => (
              <UserComp user={user} key={idx} />
            ))}
          </div>
        </div>
      )}
    </Fragment>
  )
}

export default Home;
