import Image from "next/image";
import s from "./Post.module.scss";
import rock from "../../images/rock-banner.jpg";

import like from "../../images/like.svg";
import comment from "../../images/comment.svg";

function Post() {
  return (
    <div className={s.post}>
      <div className={s.post__user}>
        <Image
          className={s.post__user__avatar}
          src={rock}
          width={40}
          height={40}
          alt="user"
        />

        <div className={s.post__user__text}>
          <h1 className={s.post__user__name}>Rock and Roll</h1>

          <p className={s.post__user__date}>06 Jane | 06:12 PM</p>
        </div>
      </div>

      <input
        type="text"
        className={s.post__input}
        value="Im the best one in this gym"
        readOnly
      />

      <div className={s.post__review}>
        <div className={s.post__likes}>
          <Image
            className={s.post__likes__img}
            src={like}
            width={25}
            height={25}
            alt="like"
          />

          <p className={s.post__review__text}>1 Likes</p>
        </div>

        <div className={s.post__comments}>
          <Image className={s.post__comments__img} src={comment} width={30} height={30} alt="comment" />

          <p className={s.post__review__text}>1 Comments</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
