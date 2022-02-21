import React, {useState} from 'react';
import './transGroup.scss';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
const {v4: uuidv4} = require('uuid');
const list = [
	{id: uuidv4(), text: 'Add Video'},
	{id: uuidv4(), text: 'Add React'},
	{id: uuidv4(), text: 'Add Redux'},
];
const TransGroup = () => {
	const [newTodo, setNewTodo] = useState('');
	const [todo, setTodo] = useState(list);

	function addTodo() {
		setTodo([...todo, {id: uuidv4(), text: newTodo}]);
		setNewTodo('');
	}

	return (
		<div className='transGroup'>
			<h1>Todo List</h1>
			<div className='transGroup__input'>
				<input
					value={newTodo}
					onChange={(e) => setNewTodo(e.target.value)}
					type='text'
				/>
				<button onClick={() => addTodo()}>Add</button>
			</div>
			<div className='transGroup__wrap'>
				<TransitionGroup component='div'>
					{todo.map((el, index) => (
						<CSSTransition
							timeout={500}
							key={el.id}
							classNames='transGroup__wrap-todo'>
							<div
								key={el.id}
								className='transGroup__wrap-todo'
								onClick={() =>
									setTodo([...todo.filter((i) => i.id !== el.id)])
								}>
								{index + 1}. -- {el.text}
							</div>
						</CSSTransition>
					))}
				</TransitionGroup>
			</div>
		</div>
	);
};

export default TransGroup;
