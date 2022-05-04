import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";

function TodoForm () {
    const[newTodoValue, setNewTodoValue] = React.useState('');

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext)

    const onChange = (e) => {
        setNewTodoValue( e.target.value);
    };

    const onCancel = () => {

        setOpenModal(false);
    };
    const onSubmit = (e) => {
        e.prevenDefault();
        addTodo (newTodoValue);
        setOpenModal(false);   
    };

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="">...</label>
            <textarea
            value={newTodoValue}
            onChange ={onChange}
            placeholder="Escribe una nueva tarea"
            />
            <div>
                <button
                type="button"
                onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                type="submit"
                >
                    Añadir
                </button>
            </div>
        </form>
    );
}

export {TodoForm};