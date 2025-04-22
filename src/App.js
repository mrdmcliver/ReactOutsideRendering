
import './App.css';
import { useCallback, useEffect, useRef, useState } from 'react';

function App() {

  const [started, setStarted] = useState(false);
  const [count, setCount] = useState(0);
  const [finished, setFinished] = useState(false);
  const countRef = useRef(0);

  const asyncTimerStart = useCallback(() => {

      setTimeout(() => { 
      
        setFinished(true);
        alert(`Your score is ${countRef.current}`); /* need a ref to get right count in an alert, probably due being outside Reacts DOM renderer? This quite significant diff 
                                                       compared to other frameworks Angular, Vue or Svetle etc */
      }, 5000);
  }, []);

  function startTimer() {

    if(!started) {

      setStarted(true);
      asyncTimerStart();
    }
  }

  function updateCount() {

    setCount(count + 1);
    countRef.current = count;
  }

  return (
    <div className="App">
      <header className="App-header">
        {finished && <h1>Your score is: {count}</h1>}
        <button hidden={finished} onClick={() => { startTimer(); updateCount(); }}>Hit so many times: {count}</button>
      </header>
    </div>
  );
}

export default App;
