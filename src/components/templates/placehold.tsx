import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, Post } from "../../redux-toolkit/redusers/postsReduser";
import { AppDispatch } from "../../redux-toolkit/store/store";
import { getPosts } from "../../redux-toolkit/selectors/counterSelector";


const Placehold = () => {
    // const {data, isLoading} = useGetUsersQuery('null');
    const dispatch = useDispatch<AppDispatch>();
    const users = useSelector(getPosts);
    // if (isLoading) return <>Загрузка...</>;
    return (
      <section>
        <button
          onClick={() => {
            dispatch(fetchUsers());
          }}
        >
          Получить
        </button>
        {/* {data.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))} */}
        {users.length !== 0
          ? users.map((user: Post) => <div key={user.id}>{user.name}</div>)
          : null}
      </section>
    );
};

export default Placehold;
