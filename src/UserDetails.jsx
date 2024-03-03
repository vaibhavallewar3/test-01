import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { userDetails } from './redux/action';

const UserDetails = () => {

    const { loading, person, error } = useSelector((state) => state.person);
    const dispatch = useDispatch();
    const params = useParams();

    useEffect(() => {
        if (error) {
            alert(error);
            dispatch({ type: "CLEAR_ERRORS" });
        };

        if (!person || person._id !== params.id) {
            dispatch(userDetails(params.id));
        }
    }, [error, dispatch, person, params.id]);

    return (
        <Fragment>
            {loading ? "Loading" : (
                <div>
                    {person && JSON.stringify(person)}
                </div>
            )}
        </Fragment>
    )
}

export default UserDetails;
