import { useSelector } from "react-redux";
import { getCounter } from "../../redux-toolkit/selectors/counterSelector";
import { Link } from "react-router-dom";
import { FC } from "react";

const Head: FC<{ isMobx?: boolean }> = ({ isMobx }) => {
  const count = useSelector(getCounter);
  if (isMobx)
    return (
      <header>
        <nav>
          <Link to="*">Main</Link>
        </nav>
      </header>
    );
  console.log('render')
  return (
    <header>
      Count: {count}
      <nav>
        <Link to="*">Main </Link>
        <Link to="/Placeholder">Placeholder </Link>
        <Link to="/Saga">Saga </Link>
        <Link to="/Zus">Zus </Link>
      </nav>
    </header>
  );
};

export default Head;
