import React, { useEffect, useRef, useState } from "react";
import './TodoForm.css'

export default function TodoForm(props) {
  const [input, setInput] = useState("");
  const inputRef = useRef(null); // reference

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodo(input);
    setInput("");
  };

  const onChange = (e) => {
    setInput(inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form-wrap">
        <div className="todo-form">
            <input
                ref={inputRef}
                value={input}
                onChange={onChange}
                className="todo-input"
                placeholder="Them cong viec"
            />
            <button type="submit" className="todo-button">
                Thêm công việc 
            </button>          
        </div>
          <div className="todo-head">
              <div>Check</div>
              <div>Số thứ tự</div> 
              <div>Công việc</div>
              <div>Hành động</div>
          </div>
    </form>
  );
}