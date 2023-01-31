import './App.css';
import Card from "./components/Card";
import { useState } from 'react';

const App =() =>{
  const[count,setCount]=useState(0);
  return(
    <>
    <div 
    style={{
      display: "flex",
      flexDirection: 'column',
      justifyContent:"center",
      alignItems:"center",
      minHeight:"100vh"
    }}
    >
      <Card counts={count} setCounts={setCount} />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    <h2>
      Done By: Chirag Khatri--12016723
    </h2>
    </div>
    </>
  );
};

export default App;
