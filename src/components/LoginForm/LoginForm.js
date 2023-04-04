import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.formLogin} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.labelLogin}>
        Email
        <input className={css.inputLogin} type="email" name="email" />
      </label>
      <label className={css.labelLogin}>
        Password
        <input className={css.inputLogin} type="password" name="password" />
      </label>
      <button className={css.buttonLogin} type="submit">
        Log In
      </button>
    </form>
  );
};
