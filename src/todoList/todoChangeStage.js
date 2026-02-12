//상태변경 처리 함수
import { useRecoilState, useSetRecoilState } from "recoil";
import { todoListState, filterState } from "./todoState";

export default function useTodoActions(){ 
  const [todos, setTodos] = useRecoilState(todoListState);
  const setFilter = useSetRecoilState(filterState);

  //1.체크상태 변경
  const toggleTodo = (id) => { 
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ?
          { ...todo, completed: !todo.completed }
          : todo )
    );
  }
  //2.입력
  const addTodo = (text) => { 
    if (!text.trim()) return; //여백 빈값 무시
    setTodos((prev) => [...prev, { id: Date.now(), text, completed: false }]);
  }

  //3.수정
  const editTodo = (id, newText) => {
    if (newText === null) return;
    if (!newText.trim()) return;
    
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ?
          { ...todo, text: newText } : todo
      )
    );
  }

  //4.삭제
  const deleteTodo = (id) => { 
    setTodos(
      (prev) => prev.filter(
        (todo) => todo.id !== id
      )
    );
  }

  return {
    toggleTodo,
    addTodo,
    editTodo,
    deleteTodo,
    setFilter
  };
}








//2.입력
//3.수정
//4 삭제