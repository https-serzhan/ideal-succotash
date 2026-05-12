import UserItem from './UserItem.tsx'
import type {User} from "../types/user.ts";

type UserListProps = {
    users: User[];
    onDeleteUser: (id: number) => void;
};

export default function UserList({users, onDeleteUser}: UserListProps) {
    if(users.length === 0){
        return (
            <p className='empty-message'>No users found</p>
        )
    }
    return (
        <ul className='user-list'>
            {users.map(user => (
                <UserItem
                    key={user.id}
                    onDeleteUser ={onDeleteUser}
                    user = {user}
                />
            ))}
        </ul>
    )
}