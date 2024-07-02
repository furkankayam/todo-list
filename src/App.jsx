import { useState } from "react";
import Header from "./components/Header"
import List from "./components/List"


function App() {

  const [todos, setTodos] = useState([]);

  return (
    <>
      <Header setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} />
    </>
  )
}

export default App
