import { Link } from 'react-router-dom';

const Error404 = () => (
  <div className="error">
    <h1>404</h1>
    <span>Sorry, the page you’re looking for can’t be found</span>
    <Link to="/blocks" className="error__button">
      Blocks
    </Link>
  </div>
);

export default Error404;
