import s from "./style.module.css";
import { ButtonModal } from "../ButtonModal/ButtonModal";

export const NextRoundModal = ({ onClickBtn, onClickYesRestart, value }) => {
  return (
    <>
      <div onClick={onClickBtn} className={s.container}></div>
      <div className={s.content}>
        <p className={s.text}> {value} takes the round</p>
        <div className={s.wrapper}>
          <ButtonModal color="silver" text="Quit" onclick={onClickBtn} />
          <ButtonModal
            color="orange"
            text="Next Round"
            onclick={onClickYesRestart}
          />
        </div>
      </div>
    </>
  );
};
