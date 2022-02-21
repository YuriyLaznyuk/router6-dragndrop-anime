import React, {useEffect, useState} from 'react';
import './anime.scss';
import {Transition} from 'react-transition-group';
const Anime = () => {
	const [visible, setVisible] = useState<boolean>(false);

	useEffect(() => {
		setTimeout(() => setVisible(true), 1000);
		setTimeout(() => setVisible(false), 5000);
	}, []);

	return (
		<div className='anime'>
			<button onClick={() => setVisible(!visible)}>
				{visible ? 'show' : 'hide'}
			</button>
			<div className='anime__wrap'>
				<Transition in={visible} timeout={500} mountOnEnter unmountOnExit>
					{(state) => <div className={`anime__wrap-circle ${state}`}></div>}
				</Transition>
			</div>
		</div>
	);
};

export default Anime;
