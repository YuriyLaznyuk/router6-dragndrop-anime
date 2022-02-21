import React, {useState} from 'react';
import './dragBoards.scss';
interface IItems {
	id: number;
	title: string;
}

interface IBoard {
	id: number;
	title: string;
	items: IItems[];
}

const DragBoards = () => {
	const initialState = [
		{
			id: 1,
			title: 'task',
			items: [
				{id: 1, title: 'go shop'},
				{id: 2, title: 'go gim'},
				{id: 3, title: 'go home'},
			],
		},
		{
			id: 2,
			title: 'verify',
			items: [
				{id: 4, title: 'code'},
				{id: 5, title: 'fix bag'},
				{id: 6, title: 'method create'},
			],
		},
		{
			id: 3,
			title: 'done',
			items: [
				{id: 7, title: 'video'},
				{id: 8, title: 'site'},
				{id: 9, title: 'anime'},
			],
		},
	];

	const [boards, setBoards] = useState<IBoard[]>(initialState);
	const [currentBoard, setCurrentBoard] = useState<IBoard>();
	const [currentItem, setCurrentItem] = useState<IItems>();

	function dragStartHandler(
		event: React.DragEvent<HTMLDivElement>,
		board: IBoard,
		item: IItems,
	) {
		setCurrentBoard(board);
		setCurrentItem(item);
	}

	function dragDropHandler(
		event: React.DragEvent<HTMLDivElement>,
		board: IBoard,
		item: IItems,
	) {
		event.preventDefault();
		//get index//
		if (currentBoard && currentItem) {
			const currentIndex = currentBoard.items.indexOf(currentItem);
			//delete elem current board//

			currentBoard?.items.splice(currentIndex, 1);

			const dropIndex = board.items.indexOf(item);
			//added drop currentItem//
			board.items.splice(dropIndex + 1, 0, currentItem);

			setBoards(
				boards.map((b) => {
					//change boards//
					if (b.id === board.id) {
						return board;
					}
					if (b.id === currentBoard.id) {
						return currentBoard;
					}
					return b;
				}),
			);
		}
	}
	function dropCardHandler(e: React.DragEvent<HTMLDivElement>, board: IBoard) {
		const currentId = board.items.map((item) => item.id);

		if (currentBoard && currentItem) {
			if (!currentId.includes(currentItem.id)) {
				const currentIndex = currentBoard.items.indexOf(currentItem);

				board.items.push(currentItem);
				currentBoard.items.splice(currentIndex, 1);

				setBoards(
					boards.map((b) => {
						//change boards//
						if (b.id === board.id) {
							return board;
						}
						if (b.id === currentBoard.id) {
							return currentBoard;
						}
						return b;
					}),
				);
			}
		}
	}

	function dragEndHandler(event: React.DragEvent<HTMLDivElement>) {
		//delete shadow//
		event.currentTarget.style.boxShadow = 'none';
	}

	function dragOverHandler(event: React.DragEvent<HTMLDivElement>) {
		event.preventDefault();
		if (event.currentTarget.className == 'dragBoards__board-item') {
			//added shadow//
			event.currentTarget.style.boxShadow = '0 4px 3px gray';
		}
	}

	function dragLeaveHandler(event: React.DragEvent<HTMLDivElement>) {
		//delete shadow//
		event.currentTarget.style.boxShadow = 'none';
	}

	return (
		<div className='dragBoards'>
			{boards.map((board) => (
				<div
					key={board.id}
					className='dragBoards__board'
					onDragOver={(e) => dragOverHandler(e)}
					onDrop={(e) => dropCardHandler(e, board)}>
					<div>{board.title}</div>
					{board.items.map((item) => (
						<div
							className='dragBoards__board-item'
							key={item.id}
							draggable={true}
							onDragStart={(event) => dragStartHandler(event, board, item)}
							onDragLeave={(event) => dragLeaveHandler(event)}
							onDragEnd={(event) => dragEndHandler(event)}
							onDragOver={(event) => dragOverHandler(event)}
							onDrop={(event) => dragDropHandler(event, board, item)}>
							{item.title}
						</div>
					))}
				</div>
			))}
		</div>
	);
};

export default DragBoards;
