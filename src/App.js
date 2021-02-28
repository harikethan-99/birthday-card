import react,{ useState } from 'react';
import './App.css';
import {arr} from './data';
import List from './List';
const App = () => {
  const [people,setpeople] = useState(arr);
  return (
        <div className="background">
      <h1>{people.length} Birthday Wishes Today</h1>
        <List people={people}/>
      <button onClick={() => {setpeople([])}}>clear all</button>
    </div>
  );
  }
export default App;
