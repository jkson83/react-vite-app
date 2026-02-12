import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { filterState } from "./todoState";
import { filteredTodoList, remainingTodoCount } from "./todoSelectors";
import useTodoActions from "./todoChangeStage";
import {
  TodoWrapper,
  TodoBox,
  Title,
  Input,
  Filter,
  List,
  Footer,
  RemainText,
} from "./styles";

export default function TodoList() { 
  //필터 상태 가져오기
  const [filter, setFilter] = useRecoilState(filterState);
  const [text, setText] = useState("");
  const todos = useRecoilValue(filteredTodoList);
  const rmCount = useRecoilValue(remainingTodoCount);
  const { toggleTodo, addTodo, editTodo, deleteTodo } = useTodoActions();

  //console.log(rmCount);

  return (
  <TodoWrapper>
    <TodoBox>
      <Title>Todo List</Title>
      {/* 입력필드 */}
      <Input.Row>
          <Input.Field
            placeholder="Add a new task..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key ==="Enter" && addTodo(text)}
        />
          <Input.Button onClick={() => { addTodo(text); setText(""); }} >Add</Input.Button>
      </Input.Row>
      {/* 검색필드 */}
      <Filter.Row>
        <Filter.Button active={filter === "all"} onClick={ ()=>setFilter("all")}>All</Filter.Button>
        <Filter.Button active={filter === "active"} onClick={ ()=>setFilter("active")}>Active</Filter.Button>
        <Filter.Button active={filter === "completed"} onClick={ ()=>setFilter("completed")}>Completed</Filter.Button>
      </Filter.Row>
      {/* 리스트필드 */}
        <List.Row>
          {todos.map((todo) => (
            <List.Item key={todo.id}>
              <List.Checkbox type="checkbox" checked={ todo.completed} onChange={() => toggleTodo(todo.id)} />
              <List.Text completed={todo.completed} onClick={()=>editTodo(todo.id, prompt("Edit task:", todo.text))} >{todo.text }</List.Text>
              <List.DeleteButton onClick={ ()=> deleteTodo(todo.id)}>Delete</List.DeleteButton>
            </List.Item>
          ))}
        </List.Row>
        {/* //수정 프로프트 예제
        onClick={()=>{
          const result = prompt("Edit task:", todo.text);
          if (result !== null && result.trim() !== "")
            {editTodo(todo.id,  result);  }
        } */}
      {/* 하단 */}
      <Footer>
        <RemainText>{rmCount} tasks remaining...</RemainText>
      </Footer>
    </TodoBox>
  </TodoWrapper>
  );
}