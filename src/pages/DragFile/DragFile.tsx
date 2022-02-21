import React, {useEffect, useState} from 'react';
// import axios from 'axios';
import './dragFile.scss';
const DragFile = () => {
	const [drag, setDrag] = useState(false);
	const [file, setFile] = useState<File>();
	const [imgPath, setImgPath] = useState('');

	function dragStartHandler(e: React.DragEvent<HTMLDivElement>) {
		e.preventDefault();
		setDrag(true);
	}

	function dragLeaveHandler(e: React.DragEvent<HTMLDivElement>) {
		e.preventDefault();
		setDrag(false);
	}

	function onDropHandler(e: React.DragEvent<HTMLDivElement>) {
		e.preventDefault();
		if (e.dataTransfer) {
			setFile(e.dataTransfer.files[0]);
			console.log('file[0]', e.dataTransfer.files[0]);

			// axios.post('http://localhost:7755/upload', formData, {
			// 	headers: {
			// 		Content_Type: 'multipart/form-date',
			// 	},
			// });
			setDrag(false);
		}
	}

	useEffect(() => {
		if (file) {
			const formData = new FormData();

			formData.append('file', file);
			fetch('http://localhost:7255/upload', {
				// headers: {Content_Type: 'multipart/form-date'},
				method: 'POST',
				body: formData,
			})
				.then((res) => res.json())
				.then((json) => setImgPath(json.file))
				.catch((err) => console.log(err));
		}
	}, [file]);

	return (
		<div>
			<h1>DragFile</h1>

			{drag ? (
				<div
					className='dragFile__drop'
					onDragStart={(e) => dragStartHandler(e)}
					onDragLeave={(e) => dragLeaveHandler(e)}
					onDragOver={(e) => dragStartHandler(e)}
					onDrop={(e) => onDropHandler(e)}>
					added file
				</div>
			) : (
				<div
					className='dragFile__aria'
					onDragStart={(e) => dragStartHandler(e)}
					onDragLeave={(e) => dragLeaveHandler(e)}
					onDragOver={(e) => dragStartHandler(e)}>
					moved file
				</div>
			)}
			{imgPath && <img src={`http://localhost:7255${imgPath}`} alt='img' />}
		</div>
	);
};

export default DragFile;
