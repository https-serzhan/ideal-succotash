import type {Todo} from "../../types/todo.ts";
import Button from "../Button/Button.tsx";

type TodoItemProps = {
    todo: Todo,
    onRemove: (id: number) => void,
    onToggle: (id: number) => void,
}
export default function TodoItem({todo, onRemove, onToggle} : TodoItemProps) {

    return (
        <li className='todo-item'>
            <span className={todo.completed ? 'todo-title completed' : 'todo-title'}>
                {todo.title}
            </span>
            <input type='checkbox' onChange={() => onToggle(todo.id)} checked={todo.completed} className="todo-checkbox"/>
            <Button onClick={() => onRemove(todo.id)} variant='danger'>
                Remove
            </Button>
        </li>
    )
}

