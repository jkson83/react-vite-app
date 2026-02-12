import { Routes, Route } from 'react-router-dom';
import Lnb from './Lnb.jsx';
import Contents from './Contents';
import About from "../about/about";
import Card from "../card/list";
import TodoList from "../todoList/todolist";
import Game from "../game/game.jsx";

export default function Container() { 
  return (
    <div className="container">
      <Lnb />
      <Contents>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/card" element={<Card />} />
          <Route path="/todo" element={<TodoList />} />
          <Route path="/game" element={<Game />} /> 
        </Routes>
      </Contents>
    </div>
  );
}