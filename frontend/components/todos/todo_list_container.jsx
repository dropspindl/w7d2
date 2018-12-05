import TodoList from './todo_list';
import {connect} from 'react-redux';
import {getAllTodos} from '../../reducers/selectors';
import {receiveTodo} from '../../actions/todo_actions';


const mapStateToProps = state => {
  // debugger
  return {todos: getAllTodos(state)}
};

const mapDispatchToProps = dispatch => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo))
  // receiveTodos: (todos) => dispatch(receiveTodos(todos))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);