import React from 'react';
import { IAnimal } from "../types/animal";
import AnimalItem from "./AnimalItem";

interface AnimalListProps {
	animals: IAnimal[]
}

const AnimalList: React.FC<AnimalListProps> = ({ animals }) => {
	return (
		<div className="row">

			{animals.map(animal =>
				<AnimalItem
					key={animal.id}
					animal={animal}
				/>
			)}
		</div>
	);
};

export default AnimalList;
