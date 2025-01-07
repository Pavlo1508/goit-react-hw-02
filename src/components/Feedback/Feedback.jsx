// import { useState } from 'react';
import s from './Feedback.module.css';

const Feedback = ({ feedbackData, totalFeedback, positiveFeedback }) => (
  <div className={s.wrapper}>
    <ul className={s.result_list}>
      {Object.entries(feedbackData).map(([key, value]) => (
        <li key={key} className={s.result}>
          {`${key}: ${value}`}
        </li>
      ))}
      <li className={s.result}>Total: {totalFeedback()}</li>
      <li className={s.result}>Positive: {positiveFeedback()}</li>
    </ul>
  </div>
);

export default Feedback;