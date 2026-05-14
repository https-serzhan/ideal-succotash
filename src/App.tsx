import './App.css'
import { useState } from 'react'
import initialUsers from './data/users.ts'
import type {User} from "./types/user.ts";
import UserList from "./components/UserList.tsx";
import LoginForm from "./components/LoginForm.tsx";

function App() {
    const [users, setUsers] = useState<User[]>(initialUsers)
    const [isVisible, setIsVisible] = useState<boolean>(false)

    function handleDelete(id: number){
        setUsers(prevUsers => prevUsers.filter(user => user.id !== id))
    }

    function handleToggle(){
        setIsVisible((prevIsVisible) => !prevIsVisible);
    }

  return (
      <div className="app">
          <h1 className='app-title'>Current Users:</h1>
          <UserList users={users} onDeleteUser={handleDelete}/>

          {isVisible && <div className='hidden-block'>I SEE YOU </div>}
          <button onClick={handleToggle}>Toggle block</button>

          <LoginForm />

      </div>
  )
}

export default App
