import React from 'react';
import './ListItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';

const ListItems = (props) => {
	return (
		<div>
			<FlipMove duration={300} easing="ease-in-out">
				{props.items.map((item) => (
					<div className="list" key={item.key}>
						<p>
							<input
								type="text"
								id={item.key}
								value={item.text}
								onChange={(e) => {
									props.setUpdate(e.target.value, item.key);
								}}
							/>
							<span>
								<FontAwesomeIcon
									className="faicons"
									onClick={() => {
										props.deleteItem(item.key);
									}}
									icon="trash"
								/>
							</span>
						</p>
					</div>
				))}
			</FlipMove>
		</div>
	);
};

export default ListItems;
