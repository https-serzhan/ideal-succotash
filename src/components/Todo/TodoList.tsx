import type {Todo} from "../../types/todo.ts";
import TodoItem from "./TodoItem";
type TodoListProps = {
    todos: Todo[],
    onRemove: (id: number) => void,
    onToggle: (id: number) => void,
}

export default function TodoList({todos, onRemove, onToggle} : TodoListProps) {
    if (todos.length === 0) {
        return <p className='empty-message'>There are no tasks to do</p>
    }
    return (
        <ul className='todo-list'>
            {todos.map((todo) => {
                return <TodoItem key = {todo.id} todo = {todo}
                                 onRemove= {onRemove}
                                 onToggle= {onToggle} />
            })}
        </ul>
    )
}