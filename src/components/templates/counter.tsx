import { useDispatch } from "react-redux";
import { decrement, increment, setValue } from "../../redux-toolkit/redusers/counterReduser";
import { useRef } from "react";
import { Button, IconButton, Input } from "@mui/material";

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
          <IconButton aria-label="delete" color="primary">
          </IconButton>
          <Button variant="contained" color="primary" onClick={up}>
            +1
          </Button>
          <Button variant="contained" color="primary" onClick={down}>
            -1
          </Button>
          <span>
            <Input type="text" ref={inputCount} />
            <Button variant="contained" color="secondary" onClick={set}>
              Задать
            </Button>
          </span>
        </section>
      </>
    );
};

export default Counter; 
