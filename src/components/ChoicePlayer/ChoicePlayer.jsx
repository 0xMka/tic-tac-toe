import s from "./style.module.css";

export const ChoicePlayer = ({ iconPlayerX, iconPlayerO }) => {
  return (
    <div className={s.container}>
      <p className={s.title}>Pick player 1'S mark</p>
      <div className={s.container_choicePlayer}>
        <div className={s.content_choicePlayer}>
          <div className={s.choicePlayer}>
            <img className={s.img} src={iconPlayerX} alt="X" />
          </div>
        </div>
        <div className={s.content_choicePlayer}>
          <div className={s.choicePlayer}>
            <img className={s.img} src={iconPlayerO} alt="O" />
          </div>
        </div>
      </div>
      <p className={s.detail}>Remenber : X goes first</p>
    </div>
  );
};
