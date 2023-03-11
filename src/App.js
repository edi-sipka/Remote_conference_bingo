import './App.css';
import Board from './components/Board';
import {cards, combination} from './data/data';

const App = () => {
  return (
    <div className="app">
      <Board combination={combination} cards={cards} />
    </div>
  );
};

export default App;