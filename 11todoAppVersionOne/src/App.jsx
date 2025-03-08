import "./App.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <div className="items-container">
        <AddTodo />
        <TodoItem itemName="Buy Milk" date="10/12/2024" />
        <TodoItem itemName="Go to Collage" date="12/12/2024" />
      </div>
    </center>
  );
}

export default App;
