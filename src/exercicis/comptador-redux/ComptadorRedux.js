import { useDispatch, useSelector } from "react-redux";
import {
  increaseCounter,
  decreaseCounter,
  reset,
} from "./actions/counterActions";

function CounterRedux() {
  const count = useSelector((store) => store.counterReducer.count);
  const dispatchCounter = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <h3> Counter app ( amb react-redux )</h3>
        <p>{count}</p>
        <br />
        <button
          className="counterButon"
          onClick={() => dispatchCounter(increaseCounter(1))}
        >
          +1
        </button>
        <br />
        <button
          className="counterButon"
          onClick={() => dispatchCounter(increaseCounter(5))}
        >
          +5
        </button>
        <br />
        <button
          className="counterButon"
          onClick={() => dispatchCounter(decreaseCounter(1))}
        >
          -1
        </button>
        <br />
        <button
          className="counterButon"
          onClick={() => dispatchCounter(decreaseCounter(5))}
        >
          -5
        </button>
        <br />
        <button
          className="counterButon lastButton"
          onClick={() => dispatchCounter(reset())}
        >
          Reset
        </button>
      </header>
    </div>
  );
}

export default CounterRedux;
