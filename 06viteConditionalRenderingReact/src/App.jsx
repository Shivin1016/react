import { useState } from "react";
import "./App.css";
import LogoutBtn from "./components/LogoutBtn";
import LoginBtn from "./components/LoginBtn";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Cards from "./components/Cards"; 
import codePic from "./assets/Flag-India.webp";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  // //early return
  // if(!isLoggedIn){
  //   return (
  //     <LoginBtn/>
  //   )
  // }

  // //using logical Operators
  // return (
  //   <div>
  //     <h1>Welcome EveryOne to shiv Websites</h1>
  //     <div>
  //       {isLoggedIn && <LogoutBtn/>}
  //     </div>
  //   </div>
  // )

  //using ternary operator
  return (
    <div className="container">
      <NavBar />
      <div className="main-card">
        <Cards title='card 1' image = {codePic} desc ='card1 description'
         >{isLoggedIn ? <LogoutBtn /> : <LoginBtn />}</Cards>
        <Cards title='card 2' image = {codePic} desc ='card2 description'>{isLoggedIn ? <LogoutBtn /> : <LoginBtn />}</Cards>
        <Cards title='card 3' image = {codePic} desc ='card3 description'>{isLoggedIn ? <LogoutBtn /> : <LoginBtn />}</Cards>
      </div>

      <Footer />
    </div>
  );

  //using if else
  // if (isLoggedIn) {
  //   return <LogoutBtn />;
  // } else {
  //   return <LoginBtn />;
  // }
}

export default App;
