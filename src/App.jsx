import { useEffect, useState} from "react";

import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

const App = () => {
const INITIAL_STATE = { Good: 0, Neutral: 0, Bad: 0 };

	const getInitialFeedback = () => {
    const savedFeedback = localStorage.getItem("feedback");
    return savedFeedback ? JSON.parse(savedFeedback) : INITIAL_STATE;
  };

	const [feedback, setFeedback] = useState(getInitialFeedback);
	
	useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
	}, [feedback]);
	
	const updateFeedback = (feedbackType) => {
		setFeedback(prev => {
			const updatedCounts = {
        ...prev,
        [feedbackType]: prev[feedbackType] + 1,
			};
			
			return updatedCounts
		})
	}

	const resetFeedback = () => {
		setFeedback(INITIAL_STATE);
	}

	const calculateTotal = () => {
		let total = feedback.Good + feedback.Neutral + feedback.Bad

		return total
	}

	const calculatePositiveFeedback = () => {
		let positiveFeedback = Math.round((feedback.Good / calculateTotal()) * 100) + '%';

		return positiveFeedback
	}

	return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        showReset={calculateTotal}
      />
      {calculateTotal() ? (
        <Feedback
          feedbackData={feedback}
          totalFeedback={calculateTotal}
          positiveFeedback={calculatePositiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;
