import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

function FeedbackForm() {
	const [ text, setText ] = useState('');
	const [ rating, setRating ] = useState(10);
	const [ btnDisabled, setBtnDidabled ] = useState(true);
	const [ message, setMessage ] = useState('');

	const { addFeedback } = useContext(FeedbackContext);

	const handleTextChange = ({ target: { value } }) => {
		if (value === '') {
			setBtnDidabled(true);
			setMessage(null);
		} else if (value.trim().length <= 10) {
			setMessage('Text must be at least 10 characters');
			setBtnDidabled(true);
		} else {
			setMessage(null);
			setBtnDidabled(false);
		}
		setText(value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (text.trim().length > 10) {
			const newFeedback = {
				text,
				rating
			};
			addFeedback(newFeedback);

			setBtnDidabled(true);
			setRating(10);
			setText('');
		}
	};

	return (
		<Card>
			<form onSubmit={handleSubmit}>
				<h2>How would you rate your service with us?</h2>
				<RatingSelect select={setRating} selected={rating} />
				<div className="input-group">
					<input onChange={handleTextChange} type="text" placeholder="Write a review" value={text} />
					<Button type="submit" isDisabled={btnDisabled}>
						Send
					</Button>
				</div>
				{message && <div className="message">{message}</div>}
			</form>
		</Card>
	);
}

export default FeedbackForm;
