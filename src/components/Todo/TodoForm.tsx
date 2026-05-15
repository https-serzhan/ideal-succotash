import {useState} from "react";

type TodoFormProps = {
    onAdd : (text: string) => void;
}

export default function TodoForm({onAdd}:TodoFormProps) {
    const [value, setValue] = useState('');
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        onAdd(value);
        setValue('');
    }
    return (
        <form onSubmit={handleSubmit} className='todo-form'>
            <label className="todo-label">
                Enter your Task:
                <input value={value}
                       onChange={(e) => setValue(e.target.value)}
                       className='todo-input'
                       type='text'/>
            </label>
            <button type="submit" className='todo-button'>Submit</button>
        </form>
    )
}