import './App.css';
import axios from "axios";

function App() {
    const request = () => {
        axios.get("/.netlify/functions/index/")
    }

  return (
      <div className="App">
          <button onClick={request}>Fire Request</button>
    </div>
  );
}

export default App;
