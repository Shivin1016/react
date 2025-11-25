import "./App.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";

function App() {
  let itemNames = ["Buy Milk" , "submit Rent" , "Complete todays coding Task"];
  let comletionDates = ["03/05/2025" , "04/05/2025" , "05/05/2025"];

  return (
    <center className="todo-container">
      <AppName />
      <div className="items-container">
        {/* <AddTodo /> */}
         
        <TodoItem itemName="Buy Milk" date="03/05/2025" /> 
        <TodoItem itemName="go to collage" date="12/05/2025" /> 
 
         
      </div>
    </center>
  );
}

export default App;
