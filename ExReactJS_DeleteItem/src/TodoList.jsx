import React from "react";
import { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = props => {
    const { todoList } = props;
    const [item, setItem] = useState(todoList);

    const deleteItem = (todo) =>
        setItem((item) => item.filter((ele) => ele.id !== todo.id));
    const changeBox = (todo) =>
        setItem((item) =>
            item.map((ele) =>
                ele.id === todo.id ? { ...ele, isDone: !ele.isDone } : ele
            )
        );
    return (
        <div>
            {item.map(todo => {
                 return (
                     <TodoItem
                         item={item}
                         deleteItem={deleteItem.bind({}, todo)}
                         changeBox={changeBox.bind({}, todo)}
                         todo={todo}
                    />
                 )
             })}
        </div>    
    )
}

export default TodoList;