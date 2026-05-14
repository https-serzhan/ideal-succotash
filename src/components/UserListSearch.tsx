import { useMemo,useState } from 'react'
import initialUsers from '../data/users.ts'
import type {User} from "../types/user.ts";
import UserList from "./UserList.tsx";
import useDebounce from "../hooks/useDebounce.ts";

export default function UserListSearch(){
    const [users, setUsers] = useState<User[]>(initialUsers)
    const [searchValue, setSearchValue] = useState('')
    const debouncedSearch = useDebounce(searchValue, 500)

    function handleDelete(id: number){
        setUsers(prevUsers => prevUsers.filter(user => user.id !== id))
    }

    const filteredUsers = useMemo(() => {
        if(!debouncedSearch){
            return users;
        }
        return users.filter(user => {
            return user.name.toLowerCase().includes(debouncedSearch.trim().toLowerCase().replace(/\s+/g, ""))
        })
    }, [users, debouncedSearch])

    return (
        <>
            <h1 className='app-title'>Current Users:</h1>
            <label className="search-label">
                Enter user name:
                <input
                    placeholder='Search by name...'
                    className="search-input"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}

                />
            </label>
            <UserList users={filteredUsers} onDeleteUser={handleDelete}/>
        </>
    )
}