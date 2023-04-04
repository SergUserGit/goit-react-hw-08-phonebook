import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.mainNav}>
      <NavLink to="/" className={css.linkHome}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.contactsNav} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
