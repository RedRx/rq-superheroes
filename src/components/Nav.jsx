import { Link } from "react-router-dom";

//eslint-disable-next-line
const Nav = ({ children }) => {
  return (
    <main>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/super-heroes">Traditional SuperHeroes</Link>
          </li>
          <li>
            <Link to="/rq-super-heroes">RQ SuperHeroes</Link>
          </li>
        </ul>
      </nav>
      {children}
    </main>
  );
};

export default Nav;
