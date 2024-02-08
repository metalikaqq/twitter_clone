import s from "./SideBar.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Moirai_One } from 'next/font/google';

import main_logo from "../../images/main-logo.png";
import homeIcon from "../../images/home-icon.svg";
import rocketIcon from "../../images/rocket-icon.svg";
import toolsIcon from "../../images/tools-icon.svg";
import settingsIcon from "../../images/settings-icon.svg";
import userIcon from "../../images/user-icon.svg";

const moirai = Moirai_One({
  subsets: ["latin"],
  weight: "400"
});

function SideBar() {
  return (
    <div className={s.sidebar}>
      <div className={s.sidebar__logo}>
      <Image
        className={s.sidebar__logo__img}
        src={main_logo}
        alt="Main Logo"
        priority
      />

      <span className={`${moirai.className} ${s.sidebar__logo__text}`}>
        PandaTalk
      </span>
      </div>

      <ul className={s.sidebar__ul}>
        <li className={s.sidebar__li}>
          <Image
            className={s.sidebar__icon}
            src={homeIcon}
            alt="Home Icon"
            priority
            width={35}
            height={35}
          />

          <Link className={s.sidebar__link} href="/home">
            Home
          </Link>
        </li>

        <li className={s.sidebar__li}>
          <Image
            className={s.sidebar__icon}
            src={rocketIcon}
            alt="rocket Icon"
            priority
          />

          <Link className={s.sidebar__link} href="/community">
            Community
          </Link>
        </li>

        <li className={s.sidebar__li}>
          <Image
            className={s.sidebar__icon}
            src={toolsIcon}
            alt="tools Icon"
            priority
          />

          <Link className={s.sidebar__link} href="/tools">
            Tools
          </Link>
        </li>

        <li className={s.sidebar__li}>
          <Image
            className={s.sidebar__icon}
            src={settingsIcon}
            alt="settings Icon"
            priority
          />

          <Link className={s.sidebar__link} href="/settings">
            Settings
          </Link>
        </li>

        <li className={s.sidebar__li}>
          <Image
            className={s.sidebar__icon}
            src={userIcon}
            alt="user Icon"
            priority
          />

          <Link className={s.sidebar__link} href="/user">
            User
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
