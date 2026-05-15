import { useState } from "react";
import type {Todo} from "../../types/todo.ts";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import './Todo.css'
export default function TodoApp() {
    const [todos, setTodos] = useState<Todo[]>([]);
    function handleAddTodo(s: string):void {
        s = s.trim()
        if(!s) {
            return;
        }
        const newTodo:Todo = {
            id: Date.now(),
            title: s,
            completed: false
        }
        setTodos((prevState) => [...prevState, newTodo]);
    }

    function handleRemoveTodo(id:number):void {
        setTodos((prevState) => prevState.filter((item) => item.id !== id));
    }

    function handleToggleTodo(id:number):void {
        setTodos((prevState) => prevState.map((item) => {
            if(item.id === id){
                return {...item, completed: !item.completed};
            }
            return item;
        }));
    }

    return (
        <div className='todo-app'>
            <h1 className='app-title'>Current Tasks:</h1>
            <TodoForm onAdd = {handleAddTodo}/>
            <TodoList todos ={todos} onRemove= {handleRemoveTodo} onToggle= {handleToggleTodo}/>
        </div>
    )
}