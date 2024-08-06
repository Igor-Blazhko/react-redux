import { useDispatch } from "react-redux";
import { getUsers } from "../../redux-toolkit/redusers/jsonReduser";
import Users from "../templates/Users";

const Saga = () => {
    const dispatch =  useDispatch();
    return (
      <main>
        <button onClick={() => dispatch(getUsers())}>Получить пользователей</button>
        <Users/>
      </main>
    );
};

export default Saga;
