import Image from "next/image";
import s from "./FlowerButton.module.scss";

import flower from "@/images/flower-rose.svg";
import { FC } from "react";

type FlowerButtonProps = {
  text?: string;
};

const FlowerButton: FC<FlowerButtonProps> = ({ text = "Заказать" }) => {
  return (
    <button className={s.button}>
      <span className={s.button__text}>{text}</span>

      <Image
        className={s.button__image}
        src={flower}
        alt="Picture of the author"
      />
    </button>
  );
}

export default FlowerButton;

// style={{
//   borderRadius: '7px',
//   boxShadow: 'inset 0px 5px 5px 0px rgba(0, 0, 0, 0.15)',
//   background: 'rgb(149, 109, 132)',
//   color: 'white', // Add this if you want the text color to be white
//   border: 'none', // Add this to remove the default button border
//   padding: '10px 20px' // Add this to give some space around the button text
// }}>
