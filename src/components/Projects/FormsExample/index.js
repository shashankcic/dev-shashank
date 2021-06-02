import React, { useState } from 'react';

function FormsExample() {
	const [userName, setUserName] = useState('');
	const [comments, setComments] = useState('');
	const [topic, setTopic] = useState('React');

	const handleUserNameChange = e => {
		setUserName(e.target.value);
	}
	const handleCommentsChange = e => {
		setComments(e.target.value);
	}
	const handleTopicChange = e => {
		setTopic(e.target.value);
	}
	const handleSubmit = e => {
		alert(`The user ${userName} said ${comments} about the topic ${topic}`);
		e.preventDefault();
	}

	return(
		<div>
			<form onSubmit={handleSubmit} >
				<div>
					<label htmlFor="userName">Username</label>
					<input type="text" name="userName" value={userName} onChange={handleUserNameChange} />
				</div>
				<div>
					<label htmlFor="comments">Comments</label>
					<textarea name="comments" value={comments} onChange={handleCommentsChange} />
				</div>
				<div>
					<label htmlFor="topic">Username</label>
					<select name="topic" value={topic} onChange={handleTopicChange} >
						<option value="React">React</option>
						<option value="Angular">Angular</option>
						<option value="Vue">Vue</option>
					</select>
				</div>
				<button type="submit" >Submit</button>
			</form>
		</div>
	)
}

export default FormsExample;