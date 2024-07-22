import css from "./FriendListItem.module.css";

const FriendListItem = props => {
    return (
        <div>
            <img src={props.friend.avatar} alt="Avatar" width="48" />
            <p>{props.friend.name}</p>
            {props.friend.isOnline
                ? (<p className={css.online}>Online</p>)
                : (<p className={css.offline}>Offline</p>)}
            <p ></p>
        </div>
    );
};

export default FriendListItem;
