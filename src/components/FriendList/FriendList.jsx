import FriendListItem from '../FriendListItem/FriendListItem';
import css from "./FriendList.module.css";

const FriendList = props => {
    return (
        <ul className={css.list}>
            {props.friends.map((friend) => {
                return (<li className={css.item} key={friend.id}>
                    <FriendListItem friend={friend} />
                </li>)
            })}
        </ul>
    );
};

export default FriendList;
