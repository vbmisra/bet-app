import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/orderHistory">Order History</Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <div className="navbar-end text-neutral-content">
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
          <Link to="/login">Login</Link>
          </li>
        </div>
      );
    }
  }

  return (
<div class="navbar bg-base-100">
  <div class="navbar-start">      
    <ul class="menu menu-horizontal p-0">
      <li tabindex="0">
          <label class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
        <ul class="p-2">
        <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
          <Link to="/login">Login</Link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
  <a class="btn btn-ghost normal-case text-xl">Bet</a>
  <div class="navbar-end">
  <button className="btn btn-ghost normal-case text-xl"><Link to="/signup">Signup</Link></button>
  <button className="btn btn-ghost normal-case text-xl"><Link to="/login">Login</Link></button>
  </div>
</div>
      
  );
}

export default Nav;
