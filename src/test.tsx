import { useEffect, useState, useLayoutEffect } from "react";

/*
1. В какой последовательности выполнятся консоль логи?
2. А если в хуки опрокинуть []?
*/


const Child = ({ data }) => {
  useEffect(() => {
    console.log("1");
    return () => {
      console.log("2");
    };
  });

  console.log("3");

  useLayoutEffect(() => {
    console.log("4");
  });

  return <div>{data}</div>;
};

function Parent() {
  const [state, setState] = useState(1000);

  useEffect(() => {
    console.log(5);
    return () => {
      console.log(6);
    };
  });

  console.log(7);

  useLayoutEffect(() => {
    console.log(8);
    return () => {
      console.log(9);
    };
  });

  console.log(10);

  const handleClick = () => {
    console.log("11");
    setState((prevState) => {
      console.log(12);
      return prevState + 1;
    });
  };

  return (
    <>
      <div>
        <Child data={state} />
      </div>
      <button onClick={handleClick}>increment++</button>
    </>
  );
}

export default Parent;


// 7 10 3 4 8 1 5 {} 11 12 9 2 6
/*
7
10
test.tsx:17 3
test.tsx:20 4
test.tsx:39 8
test.tsx:11 1
test.tsx:30 5
test.tsx:48 11
test.tsx:50 12
test.tsx:36 7
test.tsx:45 10
test.tsx:17 3
test.tsx:41 9
test.tsx:20 4
test.tsx:39 8
test.tsx:13 2
test.tsx:32 6
test.tsx:11 1
test.tsx:30 5
 */