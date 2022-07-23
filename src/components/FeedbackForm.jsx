import React from 'react';
import { useState } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

function FeedbackForm() {
	const [ text, setText ] = useState('');
	const [ rating, setRating ] = useState(10);
	const [ btnDisabled, setBtnDidabled ] = useState(true);
	const [ message, setMessage ] = useState('');

	const handleTextChange = (e) => {
		if (text === '') {
			setBtnDidabled(true);
			setMessage(null);
		} else if (text !== '' && text.trim().length <= 10) {
			setMessage('Text must be at least 10 characters');
			setBtnDidabled(true);
		} else {
			setMessage(null);
			setBtnDidabled(false);
		}
		setText(e.target.value);
	};

	return (
		<Card>
			<form action="">
				<h2>How would you rate your service with us?</h2>
				<RatingSelect select={(rating) => setRating(rating)} />
				<div className="input-group">
					<input onChange={handleTextChange} type="text" placeholder="Write a review" />
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
