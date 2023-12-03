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
          <li>
            <Link to="/parallel-queries">Parallel Queries</Link>
          </li>
          <li>
            <Link to="/dynamic-parallel">Dynamic Parallel</Link>
          </li>
          <li>
            <Link to="/dependent-queries">Dependent Queries</Link>
          </li>
          <li>
            <Link to="/paginated-queries">Paginated Queries</Link>
          </li>
          <li>
            <Link to="/infinite-queries">Infinite Queries</Link>
          </li>
        </ul>
      </nav>
      {children}
    </main>
  );
};

export default Nav;
