import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import {TodoCounter} from "../TodoCounter/TodoCounter";
import {TodoSearch} from "../TodoSearch/TodoSearch";
import {TodoList} from "../TodoList/TodoList";
import {TodoItems} from "../TodoItems/TodoItems";
import {CreateTodoButton} from "../CreateTodoButton/CreateTodoButton";
import {Modal} from "../Modal/Modal";
import { TodoForm } from "../TodoForm/Todoform";

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  
  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <p>Desespérate, hubo un error...</p>}
        {loading && <p>Estamos cargando, no desesperes...</p>}
        {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
        
        {searchedTodos.map(todo => (
          <TodoItems
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      
      {!!openModal && (
        <Modal>
        <TodoForm></TodoForm>
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />

    </>
  );
}

export { AppUI };