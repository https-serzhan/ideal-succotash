import './App.css'
import { useState } from 'react'
import initialUsers from './data/users.ts'
import type {User} from "./types/user.ts";
import UserList from "./components/UserList.tsx";

function App() {
    const [users, setUsers] = useState<User[]>(initialUsers)

    function handleDelete(id: number){
        setUsers(prevUsers => prevUsers.filter(user => user.id !== id))
    }

  return (
      <div className="app">
          <h1 className='app-title'>Current Users:</h1>
          <UserList users={users} onDeleteUser={handleDelete}/>
      </div>
  )
}

export default App
