import s from "./CardItem.module.scss";
import Image from "next/image";

import bouquet from "@/images/bouquet-rose.png";
import FlowerButton from "../FlowerButton/FlowerButton";

function CardItem() {
  return (
    <div className={s.card}>
      <div className={s.card__top}>
        <Image
          className={s.card__image}
          src={bouquet}
          alt="Picture of the author"
        />
      </div>

      <div className={s.card__info}>
        <div className={s.card__description}>
          <span className={s.card__title}>
            <h3>
              101 красная <br /> роза
            </h3>
          </span>

          <span className={s.card__price}>
            <p>2040 грн</p>
          </span>
        </div>

        <div className={s.card__functional}>
          <FlowerButton />

          <button className={s.card__button}>
            <span className={s.card__button__text}>Быстрый заказ</span>

            <div className={s.underline}/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
