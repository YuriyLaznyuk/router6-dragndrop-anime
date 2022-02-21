import React from 'react';
import {useParams} from 'react-router-dom';
import {posts} from '../posts/postData';

const PostDetails = (props: any) => {
	const params = useParams();
	console.log('params ', params);
	console.log('props ', props);
	const {id} = params;
	const post = posts?.find((post) => post?.id === Number(id));
	console.log(post);
	return (
		<div>
			<h1>Details</h1>
			<div>{post?.body}</div>
		</div>
	);
};

export default PostDetails;
