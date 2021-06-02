import React, { useState, useEffect } from 'react';
import './styles.css';
import axios from 'axios';

function AxiosPostList() {
	const [posts, setPosts] = useState([]);
	const [errMsg, setErrMsg] = useState('');
	const listPost = posts.length ? posts.map((post,i) => <div key={post.id} >{i+1}. {post.title}</div>) : null

	useEffect(() => {
		axios.get("https://jsonplaceholder.typicode.com/posts")
		.then(response => {
			setPosts(response.data);
		})
		.catch(error => {
			console.log(error);
			setErrMsg('Error Retrieving Data!');
		})
	}, [posts, errMsg])

	return(
		<div>
			<h1 className="axios-post-h1">List of Posts</h1>
			<div className="axios-post-div">
				{listPost}
				{errMsg ? <div>{errMsg}</div> : null}
			</div>
		</div>
	)
}

export default AxiosPostList;