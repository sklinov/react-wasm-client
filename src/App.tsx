import { useEffect, useState } from "react";
import "./App.css";
import { createWorkerFactory, useWorker } from "@shopify/react-web-worker";

const createWorker = createWorkerFactory(() => import("./wasm.worker"));

function App() {
  const [input1, setInput1] = useState<number>();
  const [input2, setInput2] = useState<number>();
  const [sum, setSum] = useState<number>(0);
  const [fib, setFib] = useState<number>(0);

  const worker = useWorker(createWorker);

  useEffect(() => {
    if (input1 && input2) {
      (async () => {
        const { fibResult, sumResult } = await worker.wasmWorker([
          input1,
          input2,
        ]);
        setSum(sumResult);
        setFib(fibResult);
      })();
    }
  }, [input1, input2, worker]);

  return (
    <div className="App">
      <input
        type="number"
        onChange={(e) => setInput1(Number(e.target.value))}
      />
      <br />
      <br />
      <input
        type="number"
        onChange={(e) => setInput2(Number(e.target.value))}
      />
      <div>Sum Results: {sum}</div>
      <div>Fib Results: {fib}</div>
    </div>
  );
}

export default App;
