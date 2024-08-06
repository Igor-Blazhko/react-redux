import { useDispatch, useSelector } from "react-redux"
import { getPostsByUser, getUsers } from "../../redux-toolkit/selectors/counterSelector";
import { getPosts, getUsers as getUsersSaga } from "../../redux-toolkit/redusers/jsonReduser";
import { useEffect, useMemo, useRef } from "react";

interface CustomHook {
  <Y extends unknown[], T extends (...args: Y) => void>(
    callback: T,
    ...args: Y
  ): void;
}
const useDidUpdate: CustomHook = (callback, ...args) => {
  const func = useRef((...args)=>{});
  useEffect(() => {
     func.current(...args);
  });
  useEffect(() => {
    func.current = callback;
 }, []);
};

const Users = () => {
  const users = useSelector(getUsers);
  const posts = useSelector(getPostsByUser);
  const dispatch = useDispatch();
  useDidUpdate(console.log, 'did update');
  
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