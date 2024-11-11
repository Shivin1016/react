import UserCard from "./components/UserCard";
import "./App.css";
import codePic from "./assets/codePic.jpg";

function App() {
  return (
    <div className="container">
      <UserCard name="Delmy"desc='desc1' image = {codePic} style = {{"border-radius":"10px"}} />
      <UserCard name="semmy" desc='desc2' image = {codePic} style = {{"border-radius":"10px"}}/>
      <UserCard name="John" desc='desc3' image = {codePic} style = {{"border-radius":"10px"}}/>
    </div>
  );
}

export default App;
