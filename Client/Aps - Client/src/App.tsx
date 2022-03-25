import { ChangeEvent, useState, useMemo, useEffect } from 'react';
import './App.css'

function App() {
  const [inputMsg, setMessage] = useState("");
  const [svMessage, setServerMessage] = useState("");

  const ws = useMemo(() => new WebSocket("wss://localhost:7291/ws"), []);

  useEffect(() => {
    ws.onmessage = (ev) => {
      setServerMessage(ev.data);
    }
  }, []);

  const onSendMessage = (ev: ChangeEvent<HTMLInputElement>) => {
    const value = ev.target.value;
    setMessage(value);
    ws.send(value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>Server Message: {svMessage}</div>
        <input type="text" value={inputMsg} onChange={onSendMessage}/>
        <p>
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
