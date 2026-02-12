import { NavLink } from 'react-router-dom';

export default function Lnb() { 
  return ( 
    <nav className="lnb">
      <div className="menu">
        <ul>
          <li>
            <NavLink to="/about">about</NavLink>
          </li>
          <li>
            <NavLink to="/card">card</NavLink>
          </li>
          <li>
            <NavLink to="/todo">todoList</NavLink>
          </li>
          <li>
            <NavLink to="/game">game</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}