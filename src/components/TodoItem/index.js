import React from 'react';
import './TodoItems.css';
import {IoCheckmarkSharp} from "react-icons/io5";
import {IoCloseCircle} from "react-icons/io5";

function TodoItem(props) {
  
  return (
    <li className="TodoItem">
      <span 
      className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
      onClick={props.onComplete}
      >
        <IoCheckmarkSharp/>
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}>
        {props.text}
      </p>
      <span 
      className="Icon Icon-delete"
      onClick={props.onDelete}
      >
        <IoCloseCircle />
      </span>
    </li>
  );
}

export {TodoItem};