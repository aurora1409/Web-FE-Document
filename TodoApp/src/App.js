import './App.css'
import { useEffect } from 'react';
import axiosInstance from './api/axiosInstance'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';
import React from 'react';

const todos = []

function App() {
  const [items, setItems] = React.useState(todos)
  const [editData, setEdit] = React.useState("")

  const addTodo = name => {
    const newTodo = {
      id: Date.now(),
      name,
      isDone: false
    }
    //console.log(Date.now())
    const fetch = async () => {
      try {
        const url = "/"
        const itemAdd = await axiosInstance.post(url, newTodo)
        setItems((items) => [...items, itemAdd.data]);
        console.log("create:", itemAdd.data)
      } catch (err) {
        console.log("error:",err)
      }
    }
    fetch()
  }

  const deleteItem = (item) => {
    const fetch = async () => {
      try {
        const url = `/${item.id}`
        const itemDelete = await axiosInstance.delete(url)
        setItems(items => items.filter(ele => ele.id !== item.id))
        console.log("delete:", itemDelete.data)
      } catch (err) {
        console.log("error:",err)
      }
    }
    fetch()  
  }

  const editTodo = item => {
    const fetch = async () => {
      try {
        const url = `/${item.id}`
        const itemEdit = await axiosInstance.put(url)
        setItems((items) =>
          items.map((ele) => (ele.id === itemEdit.data.id ? { ...itemEdit.data } : ele))
        );
        setEdit("");
        console.log("edit:", itemEdit.data)
      } catch (err) {
        console.log("error:",err)
      }
    }
    fetch()
  }

  const completeItem = (it) =>
    setItems((items) =>
      items.map((ele) =>
        ele.id === it.id ? { ...ele, isDone: !ele.isDone } : ele
      )
    );

  useEffect(() => {
    const fetch = async () => {
      try {
        const url = "/"
        const response = await axiosInstance.get(url)
        setItems(response.data)
        // setItems()
        console.log("response:", response.data)
      } catch (err) {
        console.log("error:",err)
      }
    }
    fetch()
  },[])
  
  return (
    <>
      <div className='App'>

        <div className='Form'>
          <h1 style={{ marginTop: 5 }}>Todo App</h1>
          
          <TodoForm addTodo={addTodo} />
          
          <TodoList
            items={items}
            deleteItem={deleteItem}
            completeItem={completeItem}
            editData={editData}
            setEdit={setEdit}
            editTodo={editTodo}
          ></TodoList>
        </div>
      </div>
    </>
  )
}

export default App;
