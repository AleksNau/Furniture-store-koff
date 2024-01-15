import s from "./Developers.module.scss";

const Developers = () => (
  <ul className="developers">
    <li className={s.item}>
      Designer:&npsb;<a className={s.link} href="https://t.me" target="_blank">Anastasia Ilina</a>
    </li>
    <li className={s.item}>
      Developer:&npsb;<a className={s.link} href="https://t.me" target="_blank">Aleksei Naumenko</a>
    </li>
  </ul>
);

export default Developers;
