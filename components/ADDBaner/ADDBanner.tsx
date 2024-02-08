import Image from "next/image";
import s from "./ADDBanner.module.scss";

import rockBanner from "../../images/rock-banner.jpg";
import rockBanner2 from "../../images/rock-banner2.jpg";


function ADDBanner() {
  return (
    <div className={s.container}>
      <Image src={rockBanner} alt="Main Logo" priority className={s.banner} />

      <Image src={rockBanner2} alt="Main Logo" priority className={s.banner__2} />
    </div>
  );
}

export default ADDBanner;
