import { NavLink, Outlet, useLocation } from "react-router";

function Dashboard() {
  const { state } = useLocation();
  console.log(state);
  return (
    <div>
      <h1>Dashboard Page</h1>
      <div id="dashboard">
        <div id="sidebar">
          <NavLink to="profile">Profile</NavLink>
          <NavLink to="payments">Payments</NavLink>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;

// /dashborad/profile => ??
