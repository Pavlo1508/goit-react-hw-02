import s from "./Options.module.css";

const Options = ({ updateFeedback, resetFeedback, showReset }) => {
  return (
    <div className={s.wrapper}>
      <ul className={s.btn_list}>
        <li onClick={() => updateFeedback("Good")} className={s.btn}>
          Good
        </li>
        <li onClick={() => updateFeedback("Neutral")} className={s.btn}>
          Neutral
        </li>
        <li onClick={() => updateFeedback("Bad")} className={s.btn}>
          Bad
        </li>
				{showReset() ? <li onClick={resetFeedback} className={s.btn}>
					Reset
				</li> : ""}
      </ul>
    </div>
  );
};

export default Options