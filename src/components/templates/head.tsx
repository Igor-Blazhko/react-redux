import { useSelector } from "react-redux";
import { getCounter } from "../../redux-toolkit/selectors/counterSelector";
import { Link } from "react-router-dom";

const Head = () => {
    const count = useSelector(getCounter);
    return (
      <header>
        Count: {count}
        <nav>
          <Link to="*">Main</Link>
          <Link to="/Placeholder">Placeholder</Link>
          <Link to="/Saga">Saga</Link>
        </nav>
      </header>
    );
};

export default Head;
