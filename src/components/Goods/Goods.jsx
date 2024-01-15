import s from "./Goods.module.scss";
import Container from "../../views/Conteiner/Container.jsx";
import CardItem from "../CardItem/CardItem.jsx";

const Goods = () => (
  <section className={s.goods}>
    <Container>
      <h2 className={`${s.title} visually-hidden`}>Список товаров</h2>

      <ul className={s.list}>
        <CardItem />
      </ul>
    </Container>
  </section>
);

export default Goods;
