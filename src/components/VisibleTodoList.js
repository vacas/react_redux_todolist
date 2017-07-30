import { connect } from 'react-redux';
import { toggleTodo } from '../action/action_creators';
import TodoList from './TodoList';

// VISIBLETODOLIST COMPONENT
const getVisibleTodos = (
  todos,
  filter
) => {
  switch (filter) {
    case 'all':
      return todos;
    case 'completed':
      return todos.filter(
        t => t.completed
      );
    case 'active':
      return todos.filter(
        t => !t.completed
      );
    default:
      return todos;
  }
};

const mapStateToTodoListProps = (state, ownProps) => ({
    todos: getVisibleTodos(
      state.todos,
      ownProps.filter
    ),
});

const mapDispatchToTodoListProps = (dispatch) => ({
    onTodoClick(id) {
      dispatch(toggleTodo(id))
    },
});

const VisibleTodoList = connect(
  mapStateToTodoListProps,
  mapDispatchToTodoListProps,
)(TodoList);

export default VisibleTodoList;
