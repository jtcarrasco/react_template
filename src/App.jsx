import { Outlet, NavLink } from 'react-router-dom';

export default function App() {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          {' | '}
          <NavLink to="/about">About</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>React Template</p>
      </footer>
    </>
  );
}
