import React from 'react';
import { INew } from "../types/new";
import NewItem from "./NewItem";

interface NewListProps {
	news: INew[]
}

const NewList: React.FC<NewListProps> = ({ news }) => {
	return (
		<div className="row">

			{news.map(obj =>
				<NewItem
					key={obj.id}
					new1={obj}
				/>
			)}
		</div>
	);
};

export default NewList;