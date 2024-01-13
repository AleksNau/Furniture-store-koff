import s from "./Navigation.module.scss";

const Navigation = () => (
  <nav className={s.navigation}>
    <a className={s.link} href="/favorite">
      <span className={s.text}></span>
    </a>
    <a className={s.link} href="/cart">
      <span className={s.text}></span>
      <span>(0)</span>
    </a>
  </nav>
);

export default Navigation;
