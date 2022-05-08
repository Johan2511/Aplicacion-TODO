import React from 'react';
import { TodoContext } from '../TodoContext/TodoContext';
import './TodoSearch.css';

function TodoSearch() {

    const {searchValue, setSearchValue} = React.useContext(TodoContext);

    const onSerchValueChange = (e) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  };

    return (
        <input  
        className=' TodoSearch' 
        placeholder="Buscar Tarea"
        value={searchValue}
        onChange={onSerchValueChange}
        />
      );
  }


export {TodoSearch};
