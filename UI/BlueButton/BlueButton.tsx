import { FC } from "react";
import s from "./BlueButton.module.scss";
import Link from 'next/link';

interface BlueButtonProps {
  text: string;
  href?: string;
}

const BlueButton: FC<BlueButtonProps> = ({ text, href }) => {
  return (
    <Link href={href || '#'}>
      <p className={s.button}>
        {text}
      </p>
    </Link>
  )
};

export default BlueButton;
