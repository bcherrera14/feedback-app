import React from 'react';
import { useState } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';

function FeedbackForm() {
	const [ text, setText ] = useState('');
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
