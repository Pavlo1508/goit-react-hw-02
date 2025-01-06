import s from "./Options.module.css";

const Options = ({ updateFeedback, resetFeedback, showReset }) => {
  return (
    <div className={s.wrapper}>
      <ul className={s.btn_list}>
        <li onClick={() => updateFeedback("good")} className={s.btn}>
          Good
        </li>
        <li onClick={() => updateFeedback("neutral")} className={s.btn}>
          Neutral
        </li>
        <li onClick={() => updateFeedback("bad")} className={s.btn}>
          Bad
				</li>
				<li onClick={resetFeedback} className={s.btn} style={{display: showReset}}>
          Reset
        </li>
      </ul>
    </div>
  );
};

export default Options