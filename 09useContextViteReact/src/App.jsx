import { createContext } from "react";
import ChildA from "./components/ChildA";
import { useState } from "react";
import './App.css'

//step01-> Create Context
const UserContext = createContext();
//step02-> Wrap ALl the child Inside the provider
//step03-> pass value
//step04-> go to inside the consumer and consume the props


const themeContext = createContext('Light');

function App() {
  const [user , setUser] = useState({name : "Shivani"});
  const [theme , setTheme] = useState('Light')
  return ( 
     <UserContext.Provider value = {user}>    
      {/* creating an app */}
      <themeContext.Provider value = {{theme ,setTheme}}>
        <div id="container" style={{backgroundColor : theme === 'Light'? 'beige' : 'black' , color :theme === 'Light'? 'black' : 'white' }}>
          <ChildA/>
        </div>
      </themeContext.Provider>
      {/* <UserContext.Provider value = {user}>
        <ChildA/>
      </UserContext.Provider> */}
     </UserContext.Provider>      
 
  );
}

export default App;
export {UserContext}
export {themeContext}
