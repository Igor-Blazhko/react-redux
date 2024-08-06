import counter, { decrement, increment } from "../../Efflector/store";
import { useStore } from "effector-react";


const Effector = () => {
    const count = useStore(counter);

  return (
    <>
      <div>{count}</div>
      <button onClick={() => increment()}>+1</button>
      <button onClick={() => decrement()}>-1</button>
    </>
  );
};

export default Effector;
