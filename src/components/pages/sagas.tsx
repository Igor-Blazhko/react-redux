import { useDispatch } from "react-redux";
import { getUsers } from "../../redux-toolkit/redusers/jsonReduser";

const Saga = () => {
    const dispatch =  useDispatch();
    return (
      <main>
        <button onClick={() => dispatch(getUsers())}>Получить пользователей</button>
      </main>
    );
};

export default Saga;
