import css from "./Profile.module.css";
import clsx from "clsx";

const classItem1 = clsx(css.item1, css.item1 && css.followers)
const classItem3 = clsx(css.item3, css.item3 && css.likes)

export const Profile = ({
  name,
  image,
  tag,
  location,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.container}>
      <div className={css.name}>
        <img className={css.image} src={image} alt="User avatar" />
        <p className={css.title}>{name}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={classItem1} >
          <span>Followers</span>
          <span>
            <b>{followers}</b>
          </span>
        </li>
        <li className={css.item2}>
          <span>Views</span>
          <span>
            <b>{views}</b>
          </span>
        </li>
        <li className={classItem3}>
          <span>Likes</span>
          <span>
            <b>{likes}</b>
          </span>
        </li>
      </ul>
    </div>
  );
};
