import logo from './logo.svg';
import './App.css';
import PlayersList from './PlayersList';

{/*  the root component */}
function App() {
  return (
    <div className="App">
      {/*  add the title*/}
      <h1 style ={{color:"#9D233A",  margin: "60px 0"}}>FIFA PLAYERS CARD</h1>
      {/* render the PlayList in the root component */}
    < PlayersList/>
    </div>
  );
}

export default App;
