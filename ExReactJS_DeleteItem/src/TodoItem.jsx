const TodoItem = (prop) => {
    let { deleteItem, changeBox, todo } = prop;
    return (
        <div key={todo.id}>
        <input
            type="checkbox"
            onChange={changeBox}
            defaultChecked={todo.isDone}
        />
        <span style={{ marginRight: 10, color: todo.isDone ? "red" : "black" }}>
            Id: {todo.id}
        </span>
        <span style={{ marginRight: 10, color: todo.isDone ? "red" : "black" }}>
            Name: {todo.name}
        </span>
        <button onClick={deleteItem.bind({}, todo)}>Delete</button>
        </div>
    );
};

export default TodoItem;
