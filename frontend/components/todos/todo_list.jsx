import React from 'react';
import { getAllTodos } from '../../reducers/selectors';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';


// const todoList = () => {
//   todos.map(todo => <li>{props.todo.body}</li>);
// };
// 

const TodoList = (props) => {
  // debugger
  const todos = props.todos.map(todo => <TodoListItem todo={todo} />);
    return (
      <div>  
        <h3>Todo List goes here!</h3>
        <ul>
          {todos}
        </ul>
        <TodoForm receiveTodo={props.receiveTodo}/>
    </div>
  );
};

export default TodoList;