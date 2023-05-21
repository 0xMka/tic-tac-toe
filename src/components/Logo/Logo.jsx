import s from "./style.module.css";

export const Logo = ({ logo }) => {
  return (
    <div className={s.container}>
      <img className={s.img} src={logo} alt="logo" />
    </div>
  );
};
