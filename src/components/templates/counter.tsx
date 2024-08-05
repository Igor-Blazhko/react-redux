import { useDispatch } from "react-redux";
import { decrement, increment, setValue } from "../../redux-toolkit/redusers/counterReduser";
import { useRef } from "react";

const Counter = () => {
    const inputCount = useRef   <HTMLInputElement>(null);
    const dispatch = useDispatch();
    
    const up = () => dispatch(increment())
    const down = () => dispatch(decrement());
    const set = () => {
        if (inputCount.current && !Number.isNaN(+inputCount.current.value))
          dispatch(setValue(+inputCount.current.value));
    };

    return (
      <>
        <section>
          <button onClick={up}>+1</button>
          <button onClick={down}>-1</button>
          <span>
            <input type="text" ref={inputCount} />
            <button onClick={set}>Задать</button>
          </span>
        </section>
      </>
    );
};

export default Counter; 
