// import { useState } from 'react';
import s from './Feedback.module.css';

const Feedback = ({
  good,
  neutral,
  bad,
	total,
	positive
}) => {
  return (
    <div className={s.wrapper}>
      <ul className={s.result_list}>
        <li className={s.result}>Good: {good}</li>
        <li className={s.result}>Neutral: {neutral}</li>
        <li className={s.result}>Bad: {bad}</li>
        <li className={s.result}>Total: {total}</li>
        <li className={s.result}>Positive: {positive}</li>
      </ul>
    </div>
  );
};

export default Feedback;