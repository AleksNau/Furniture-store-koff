import s from "./Developers.module.scss";

const Developers = () => (
  <ul className={s.developers}>
    <li className={s.item}>
      Designer:&nbsp;
      <a
        className={s.link}
        href="https://t.me"
        target="_blank"
        rel="noreferrer">
        Anastasia Ilina
      </a>
    </li>
    <li className={s.item}>
      Developer:&nbsp;
      <a
        className={s.link}
        href="https://t.me"
        target="_blank"
        rel="noreferrer">
        Aleksei Naumenko
      </a>
    </li>
  </ul>
);

export default Developers;
