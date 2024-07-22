import css from "./Profile.module.css";

const Profile = props => {
    return (
        <div className={css.profile}>
            <div>
                <img src={props.image} alt="User avatar" className={css.image} />
                <p className={css.name}>{props.name}</p>
                <p className={css.p}>@{props.tag}</p>
                <p className={css.p}>{props.location}</p>
            </div>
            <ul className={css.list}>
                <li className={css.item}>
                    <span className={css.stats}>Followers</span>
                    <span className={css.num}>{props.stats.followers}</span>
                </li>
                <li className={css.item}>
                    <span className={css.stats}>Views</span>
                    <span className={css.num}>{props.stats.views}</span>
                </li>
                <li className={css.item}>
                    <span className={css.stats}>Likes</span>
                    <span className={css.num}>{props.stats.likes}</span>
                </li>
            </ul>
        </div>
    );
};

export default Profile;
