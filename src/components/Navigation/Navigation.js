import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
//import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  console.log(isLoggedIn);

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
};
//{isLoggedIn && <NavLink to="/contacts">Tasks</NavLink>}
// <NavLink to="/register">Register</NavLink>
//     <NavLink to="/login">Log In</NavLink>
