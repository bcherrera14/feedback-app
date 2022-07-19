import { useState } from 'react';
import React from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';

function App() {
	const [ feedback, setFeedback ] = useState(FeedbackData);

	return (
		<React.Fragment>
			<Header />
			<div className="container">
				<FeedbackList feedback={feedback} />
			</div>
		</React.Fragment>
	);
}

export default App;
