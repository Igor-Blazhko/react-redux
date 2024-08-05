import { observer } from "mobx-react";
import counterStore from "../../mobX/store";

const Main1 = observer(() => {

    return (
      <main>
        Count: {counterStore.value}
        Double: {counterStore.doubleValue}
        <div>
          <button onClick={() => counterStore.increment()}>+1</button>
          <button onClick={() => counterStore.decrement()}>-1</button>
        </div>
      </main>
    );
});

export default Main1;
