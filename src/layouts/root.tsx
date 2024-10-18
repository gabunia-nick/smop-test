import { Menu } from "@carbon/icons-react";
import { Button } from "@carbon/react";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div id="root-layout">
      <header className="root-nav">
        <h1>smop</h1>
        <nav className={isMenuOpen ? 'root-nav__menu--opened' : ''}>
          <ul>
            <li>
              <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/dashboards">Dashboards</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/metrics">Metrics</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/logs">Logs</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/traces">Traces</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/settings">Settings</NavLink>
            </li>
          </ul>
        </nav>
        <Button className="menu" renderIcon={Menu} hasIconOnly onClick={() => setIsMenuOpen((prev) => !prev)} aria-label="Open menu" />
      </header>
      <Outlet />
    </div>
  );
};

export default RootLayout;
