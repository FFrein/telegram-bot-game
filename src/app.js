import Game from './components/game/game';
import Lobby from './components/lobby/lobby';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route index element={<Lobby/>}></Route>
        <Route path={'game'} element={<Game/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
