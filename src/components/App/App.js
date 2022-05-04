import React from "react";
import { TodoProvider } from "../TodoContext/TodoContext";
import { AppUI } from "./appUI";

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true},
//   { text: 'Tomar el curso de intro de react', completed: false},
//   { text: 'Llorar con la llorona', completed: false},
//   { text: 'Conseguir el diploma de DigitalHouse', completed: false},
// ]



function App() {
 
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
    
    );
}

export default App;
