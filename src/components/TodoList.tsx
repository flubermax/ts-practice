import React, { useEffect } from 'react';
import { UserActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const TodoList: React.FC = () => {
  const {error, page, loading, todos, limit} = useTypedSelector(state => state.todo)
  const {fetchTodos, setTodoPage} = UserActions()
  const pages = [1,2,3,4,5]

  useEffect(() => {
    fetchTodos(page, limit)
  }, [page])

  if (loading) {
    return <h1>Идёт загрузка...</h1>
  }
  if (error) {
    return <h1>{error}</h1>
  }
  return (
    <div style={{marginTop: '50px'}}>
      {todos.map(todo => <div key={todo.id}>{todo.id}. {todo.title}</div>)}
      {pages.map(p => 
      <div 
        onClick={() => setTodoPage(p)}
        style={{border: p === page ? '2px solid green' : '1px solid gray', display: 'inline-block', padding: '5px 10px', margin: '5px'}}>
        {p}
        </div>)}
    </div>
  );
}

export default TodoList;