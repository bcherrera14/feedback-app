import React from 'react';
import { useState } from 'react';

function FeedbackItem({ item }) {
	const [ rating, setRating ] = useState(7);
	const [ text, settext ] = useState('This is a sample rating text.');

	return (
		<div className="card">
			<div className="num-display">{item.rating}</div>
			<div className="text-display">{item.text}</div>
		</div>
	);
}

export default FeedbackItem;
