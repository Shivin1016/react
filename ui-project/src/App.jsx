import React from "react";
import Section1 from "./components/section1/Section1";
import Section2 from "./components/section2/Section2";

const App = () => {
  const users = [
    { img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "Satisfied", 
      tag: "Satisfied" ,
      color:'bg-blue-600',
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661720749719-a0e52d044d79?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "", 
      tag: "UnderServed" ,
      color:'bg-green-500',
    }, 
    {
      img: "https://plus.unsplash.com/premium_photo-1661641829400-3d9c157f97b2?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "", 
      tag: "Underbanked", 
      color:'bg-indigo-900',
    },
    {
      img:'https://images.unsplash.com/photo-1635766854982-fc151c6e9278?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      tag:'UnderTaken',
      color:'bg-red-500',
    }
  ];

  return (
    <div className="flex justify-center flex-col h-">
      <Section1  users={users}/>
      <Section2 />
    </div>
  );
};

export default App;
