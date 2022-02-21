import React, {useState} from 'react';
import './cssTransition.scss';
import {CSSTransition} from 'react-transition-group';

const CssTransition = () => {
	const [show, setShow] = useState(false);
	return (
		<div className='cssTransition'>
			<button onClick={() => setShow(!show)}>{show ? 'SHOW' : 'HIDE'}</button>
			<div className='cssTransition__wrap'>
				<CSSTransition
					in={show}
					timeout={200}
					classNames='cssTransition__wrap-circle'
					mountOnEnter
					unmountOnExit>
					<div className='cssTransition__wrap-circle'></div>
				</CSSTransition>
			</div>
		</div>
	);
};

export default CssTransition;
