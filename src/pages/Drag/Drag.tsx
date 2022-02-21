import React, {useState} from 'react';
import './drag.scss';
interface IList {
	id: number;
	order: number;
	text: string;
}

const Drag = () => {
	const [cardList, setCardList] = useState<IList[]>([
		{id: 1, order: 1, text: 'Card 1'},
		{id: 2, order: 2, text: 'Card 2'},
		{id: 3, order: 3, text: 'Card 3'},
		{id: 4, order: 4, text: 'Card 4'},
	]);

	//--memory card--//
	const [currentCard, setCurrentCard] = useState<IList>();

	function dragStartHandler(
		event: React.DragEvent<HTMLDivElement>,
		card: IList,
	) {
		console.log(card);
		setCurrentCard(card);
	}

	// function dragLeaveHandler(event: React.DragEvent<HTMLDivElement>) {
	// 	return event;
	// }

	function dragEndHandler(event: React.DragEvent<HTMLDivElement>) {
		event.currentTarget.style.backgroundColor = 'white';
	}

	function dragOverHandler(event: React.DragEvent<HTMLDivElement>) {
		event.preventDefault();
		event.currentTarget.style.backgroundColor = 'lightgray';
	}

	function dragDropHandler(
		event: React.DragEvent<HTMLDivElement>,
		card: IList,
	) {
		event.preventDefault();

		setCardList(
			cardList.map((c) => {
				if (c.id === card.id && currentCard) {
					return {...c, order: currentCard.order};
				}
				if (c.id === currentCard?.id) {
					return {...c, order: card.order};
				}
				return c;
			}),
		);
		event.currentTarget.style.backgroundColor = 'white';
		console.log(card);
	}

	const sortCards = (a: IList, b: IList) => {
		if (a.order > b.order) {
			return 1;
		} else {
			return -1;
		}
	};

	return (
		<div>
			<h1>Drag</h1>
			<div className='drag__block'>
				{cardList.sort(sortCards).map((card) => (
					<div
						className='drag__block-item'
						key={card.id}
						draggable={true}
						onDragStart={(event) => dragStartHandler(event, card)}
						onDragLeave={(event) => dragEndHandler(event)}
						onDragEnd={(event) => dragEndHandler(event)}
						onDragOver={(event) => dragOverHandler(event)}
						onDrop={(event) => dragDropHandler(event, card)}>
						{card.text}
					</div>
				))}
			</div>
		</div>
	);
};

export default Drag;
