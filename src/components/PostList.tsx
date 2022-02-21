import React from 'react';
import {posts} from '../posts/postData';
import {Link} from 'react-router-dom';
const PostList = () => {
	return (
		<div>
			<h1>PostList</h1>
			{posts?.map((elem) => (
				<div key={elem.id}>
					<h1>{elem.title}</h1>
					<div>{elem.body}</div>
					<Link to={`/post/${elem.id}`}>Details</Link>
				</div>
			))}
		</div>
	);
};

export default PostList;
