import React, { useState } from 'react'
import ChildComponents from './Components/ChildComponents';

function App() {
  const [Count, setCount] = useState(0);
  const [Name, setName] = useState("david")
  return (
   <React.Fragment>
     <div>
        <p>So tang tien la {Count}</p>
        <button onClick={()=> setCount(Count + 1)}>Click tang</button>
        <ChildComponents Name={Name}/>
     </div>
   </React.Fragment>
  );
}

export default App
