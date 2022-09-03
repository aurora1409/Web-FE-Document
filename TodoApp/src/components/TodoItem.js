import { useEffect } from "react";
import './TodoItem.css'

export default function TodoItem(props) {
  const { item, deleteItem, onChangeBox, setEdit } = props;

  return (
    <div className="list-item">
      <input
        type="checkbox"
        onChange={() => onChangeBox(item)}
        checked={item.isDone}
      />
          <div>{item.id}</div>
      <div
        className="item-name"
        style={{ color: item.isDone ? "red" : "black" }}
      >
        {item.name}
          </div>
          <div className="btn">
            {/* <button onClick={() => setEdit(item)} className="delete-btn btn-left">Sửa</button> */}
            <button onClick={() => deleteItem(item)} className="delete-btn btn-right">Xóa</button>
          </div>
    </div>
  );
}



