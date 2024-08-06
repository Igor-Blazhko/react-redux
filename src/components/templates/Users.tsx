import { useDispatch, useSelector } from "react-redux"
import { getPostsByUser, getUsers } from "../../redux-toolkit/selectors/counterSelector";
import { getPosts, getUsers as getUsersSaga } from "../../redux-toolkit/redusers/jsonReduser";

const Users = () => {
    const users = useSelector(getUsers);
    const posts = useSelector(getPostsByUser);
    const dispatch = useDispatch()
    if (users.length === 0) dispatch(getUsersSaga()); 
    return (
      <section>
        {users.length === 0
          ? null
          : users.map((user) => <div key={user.id} onClick={()=>{dispatch(getPosts({userId: user.id}))}}> {user.name} </div>)}
        {posts.length === 0
          ? null
          : posts.map((post) => <div key={post.id}> {post.title} </div>)}
      </section>
    );
}
export default Users