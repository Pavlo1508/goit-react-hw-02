import { useState, useEffect } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem("feedback");
    return savedFeedback
      ? JSON.parse(savedFeedback)
      : {
          good: 0,
          neutral: 0,
          bad: 0,
          total: 0,
          positive: "0%",
        };
  });

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((prev) => {
      const updatedCounts = {
        ...prev,
        [feedbackType]: prev[feedbackType] + 1,
      };
      const total =
        updatedCounts.good + updatedCounts.neutral + updatedCounts.bad;
      const positive =
        total > 0 ? `${Math.round((updatedCounts.good / total) * 100)}%` : "0%";

      return {
        ...updatedCounts,
        total,
        positive,
      };
    });
  };

  const resetFeedback = () => {
    const initialState = {
      good: 0,
      neutral: 0,
      bad: 0,
      total: 0,
      positive: "0%",
    };
    setFeedback(initialState);
    localStorage.setItem("feedback", JSON.stringify(initialState));
  };

  const hasFeedback = feedback.total > 0;

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        showReset={hasFeedback ? "block" : "none"}
      />
      {hasFeedback ? (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={feedback.total}
          positive={feedback.positive}
        />
      ) : (
        <p>No feedback yet</p>
      )}
    </>
  );
};

export default App;
