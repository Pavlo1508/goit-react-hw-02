import s from "./Options.module.css";

const Options = ({ updateFeedback, resetFeedback, showReset }) => (
  <div className={s.wrapper}>
    {["Good", "Neutral", "Bad"].map((type) => (
      <button key={type} onClick={() => updateFeedback(type)} className={s.btn}>
        {type}
      </button>
    ))}
    {showReset && (
      <button onClick={resetFeedback} className={s.btn}>
        Reset
      </button>
    )}
  </div>
);

export default Options;
