import React from 'react';
import { Link } from 'react-router-dom';

const UserComp = ({ user }) => {
    return (
        <Link to={`/user/${user._id}`} className='card w-25 m-1 rounded border'>
            <img src={user && user.avatar && user.avatar.url} alt={user.name} className='card-image-top' />
            <div className="card-header">
            <h4 className="h4 text-center">{user.name}</h4>
            </div>
            <div className="card-body">
                <dl>
                    <dt>Mail</dt>
                    <dd>{user.email}</dd>
                    <dt>Role</dt>
                    <dd>{user.role && user.role.toUpperCase()}</dd>
                </dl>
            </div>
        </Link>
    )
}

export default UserComp;
