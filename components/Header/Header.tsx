import BlueButton from "@/UI/BlueButton/BlueButton";
import s from "./Header.module.scss";

function Header() {
  return (
    <div className={s.header}>
      <div className={s.header__button}>
        <BlueButton text='Get Started' href="/auth/login" />
      </div>
    </div>
  );
}

export default Header;
