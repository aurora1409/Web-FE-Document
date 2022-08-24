import './App.css';
import TodoList from './TodoList';


function App() {
  const todoList = [
    {
      id: 1,
      name: "Item1",
      isDone: false,
    },
    {
      id: 2,
      name: "Item2",
      isDone: false,
    },
    {
      id: 3,
      name: "Item3",
      isDone: false,
    },
    {
      id: 4,
      name: "Item4",
      isDone: false,
    },
    {
      id: 5,
      name: "Item5",
      isDone: false,
    },
  ];
  return (
    <div className="App" style={{ display: 'flex', justifyContent:'flex-start', padding: 100}}>
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
