import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Team from './components/Team/Team';

function App() {

  // const [programmers,setProgrammers] = useState([]);

  // useEffect(() =>{
  //   fetch('./programmers.json')
  //   .then(res => res.json())
  //   .then(data => setProgrammers(data))
  // },[]);
  return (
    <div className="App">
      <Header></Header>
      <Team></Team>
    </div>
  );
}

export default App;
