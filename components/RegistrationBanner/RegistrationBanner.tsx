import s from "./RegistrationBanner.module.scss";
import Image from "next/image";
import pandaLogo from "../../images/panda-best.png";
import BlueButton from "@/UI/BlueButton/BlueButton";

function RegistrationBanner() {
  return (
    <div className={s.banner__container}>
      <Image
        className={s.banner__img}
        src={pandaLogo}
        alt="panda Logo"
        priority
      />

      <div className={s.banner__text}>
        <h1 className={s.banner__title}>
          Welcome to Panda
          <span className={s.banner__title__text}>Talk</span>
        </h1>

        <p className={s.banner__description}>
          Join Community, Create and Share your thought
        </p>

        <BlueButton text="Get Started" href="/auth/login" />
      </div>
    </div>
  );
}

export default RegistrationBanner;
