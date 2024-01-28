import "./Main.module.scss";
import Goods from "../../components/Goods/Goods.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAccessToken } from "../../store/auth/auth.slice.js";
import { fetchCategoreis } from "../../store/categories/categories.slice.js";

const Main = () => {
  const dispatch = useDispatch();
  const { data: dataCategories, loading: loadingCategories, error: errorCategories } = useSelector((state) => state.categories());

  useEffect(() => {
    if (!accessToken) {
      dispatch(fetchCategoreis());
    }
  }, [dispatch]);
  return (
  <main className="main">
    {/* <Catalog data={dataCategories} /> */}
    <Goods />
  </main>
)}
export default Main;
