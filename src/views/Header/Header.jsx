import s from "./Header.module.scss";
import Container from "../Conteiner/Container.jsx";
import Logo from "../../components/Logo/Logo.jsx";
import SearchForm from "../../components/SearchForm/SearchForm.jsx";
import Navigation from "../../components/Navigation/Navigation.jsx";

const Header = () => (
  <header className={s.header}>
    <Container className={s.container}>
      <div className={s.logo}>
        <Logo />
      </div>
      <div className={s.search}>
        <SearchForm />
      </div>
      <div className={s.navigation}>
        <Navigation />
      </div>
    </Container>
  </header>
);
export default Header;
