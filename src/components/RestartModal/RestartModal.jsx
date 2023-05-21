import { ButtonModal } from "../ButtonModal/ButtonModal";
import s from "./style.module.css";

export const RestartModal = ({ onClickBtn, onClickYesRestart }) => {
  return (
    <>
      <div onClick={onClickBtn} className={s.container}></div>
      <div className={s.content}>
        <p className={s.text}>Restart game ?</p>
        <div className={s.wrapper}>
          <ButtonModal color="silver" text="No, cancel" onclick={onClickBtn} />
          <ButtonModal
            color="orange"
            text="Yes, Restart"
            onclick={onClickYesRestart}
          />
        </div>
      </div>
    </>
  );
};
