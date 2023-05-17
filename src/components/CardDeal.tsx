import { card } from "../assets";
import styles, { layout } from "../constants/styles";
import Button from "./Button";

//?_________________

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps
      </h2>
      <p className={`${styles.paragraph} max-w-[470px]`}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum aut sed
        laudantium voluptatibus. Cupiditate blanditiis cumque odio deleniti in
        sunt?
      </p>
      <Button styles="mt-10" />
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="" srcSet="" />
    </div>
  </section>
);

export default CardDeal;
