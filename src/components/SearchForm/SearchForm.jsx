import s from "./SearchForm.module.scss";

const SearchForm = () => (
  <form className={s.form} action="">
    <input
      className={s.input}
      type="search"
      name="search"
      placeholder="Введите запрос"
    />
    <button className={s.button} type="submit">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none">
        <path
          d="M7.66634 13.9999C11.1641 13.9999 13.9997 11.1644 13.9997 7.66659C13.9997 4.16878 11.1641 1.33325 7.66634 1.33325C4.16854 1.33325 1.33301 4.16878 1.33301 7.66659C1.33301 11.1644 4.16854 13.9999 7.66634 13.9999Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.6663 14.6666L13.333 13.3333"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  </form>
);

export default SearchForm;
