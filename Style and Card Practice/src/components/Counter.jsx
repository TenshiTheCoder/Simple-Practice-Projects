import { useState } from 'react'; 
import '../style/Counter.css';
function Counter () {
  const [ count, setCount ] = useState(0)
  const handleClick = () => {
    setCount (count + 1)
  }

  return (
    <div className = "counter-container">
      <button className = "counter-button" onClick={handleClick}>Click me and test the counter! Current count is {count}</button>
    </div>
  )
}

export default Counter