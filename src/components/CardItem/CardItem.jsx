import s from "./CardItem.module.scss";
import chair from "./images/chair.png"

const CardItem = () => (<article className={s.card}>
    <img className={s.image} src={chair} alt="Изображение товара"/>
    <p className={s.text}>Кресло с подлокотниками</p>
    <p className={s.price}>5 000 ₽</p>
    <button className={s.button}>В корзину</button>
</article>);

export default CardItem;
