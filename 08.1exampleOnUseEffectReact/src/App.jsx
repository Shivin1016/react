import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [serverUrl, serServerUrl] = useState("https://localhost:1234");

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();

    return()=>{
      connection.disconnect();
    };
  }, [roomId , serverUrl]);

  return <div className="container">
      
    </div>;
}

export default App;
