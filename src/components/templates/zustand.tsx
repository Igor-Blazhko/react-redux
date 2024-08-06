import useStore from "../../Zustand/store";


const Zustand = () => { 
    const { count, nameStore, users, increment, decrement, setUsers } = useStore();

    return (
      <>
        <div>{nameStore}</div>
        <div>{count}</div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>

        <button onClick={() => setUsers()}>Получить пользователей</button>
        {users.length === 0
          ? null
          : users.map((user) => <div key={user.id}>{user.name}</div>)}
      </>
    );
};

export default Zustand;