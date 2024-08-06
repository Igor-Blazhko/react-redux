import useStore from "../../Zustand/store";


const Zustand = () => { 
    const { count, nameStore, increment, decrement } = useStore()
    
    return (
      <>
        <div>{nameStore}</div>
        <div>{count}</div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </>
    );
};

export default Zustand;