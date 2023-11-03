
import './App.css';
import { useState } from "react"
import Tooltip from './Tooltip';
function App() {
  const [istoolTip, setIsTooltip] = useState(false)

  return (
    <div className="App">

      <div id="tooltip">
        {
          istoolTip && <Tooltip position={"top"} /> //passing postion type as a props
        }
        <button onMouseLeave={() => { setIsTooltip(false) }} onMouseEnter={() => { setIsTooltip(true) }} >
          Hover over me!
        </button>


      </div>
    </div>
  );
}

export default App;
