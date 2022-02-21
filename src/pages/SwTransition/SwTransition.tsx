import React, {useState} from 'react';
import './swTransition.scss';
import {CSSTransition, SwitchTransition} from 'react-transition-group';

const SwTransition = () => {
	const [mode, setMode] = useState<any>('out-in');

	//toggle anime//
	const [toggle, setToggle] = useState<any>(false);

	return (
		<div className='swTransition'>
			<div className='swTransition__block'>
				<label className='swTransition__block-label' htmlFor='out-in'>
					OUT-IN
				</label>
				<input
					className='swTransition__block-radio'
					checked={mode === 'out-in'}
					id='out-in'
					type='radio'
					name='radio'
					value='out-in'
					onChange={(e) => setMode(e.target.value)}
				/>
				<label className='swTransition__block-label' htmlFor='in-out'>
					IN-OUT
				</label>
				<input
					className='swTransition__block-radio'
					id='in-out'
					checked={mode === 'in-out'}
					type='radio'
					name='radio'
					value='in-out'
					onChange={(e) => setMode(e.target.value)}
				/>
			</div>
			<SwitchTransition mode={mode}>
				<CSSTransition key={toggle} timeout={500} classNames='fade'>
					<button onClick={() => setToggle(!toggle)}>
						{toggle ? 'Hello World' : 'good bay World'}
					</button>
				</CSSTransition>
			</SwitchTransition>
		</div>
	);
};

export default SwTransition;
