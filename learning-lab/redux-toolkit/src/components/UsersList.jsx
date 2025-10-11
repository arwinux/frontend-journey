import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncUsers } from "../features/user/userSlice";

function UsersList() {
  const { loading, error, data } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  console.log(data);

  useEffect(() => {
    dispatch(getAsyncUsers());
  }, [dispatch]);

  if (loading) return <span className="loader"></span>;
  if (error) return <p className="font-bold">{error} !!!</p>;
  return (
    <div>
      {data.map((user) => (
        <li className="font-semibold" key={user.id}>
          {user.name}
        </li>
      ))}
    </div>
  );
}

export default UsersList;
