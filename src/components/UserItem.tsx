import type {User} from "../types/user.ts";

type UserItemProps = {
    user: User;
    onDeleteUser: (id: number) => void;
};

export default function UserItem({ user, onDeleteUser }: UserItemProps) {

    return (
        <li className='user-item'>
            <span className='user-name'>{user.name}</span>
            <button className='delete-button' onClick={() => onDeleteUser(user.id)}>Delete</button>
        </li>
    )
}