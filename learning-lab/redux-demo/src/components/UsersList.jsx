import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/user/userActions";

function UsersList() {
  const { loading, error, data } = useSelector((state) => state.users);

  const dispatch = useDispatch();
  console.log(data);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <span class="loader"></span>;
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
