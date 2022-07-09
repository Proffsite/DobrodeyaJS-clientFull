import React from 'react';
import { IAnimal } from "../../types/animal";
import { useRouter } from "next/router";
import { animalsDelete } from '../../store/actions-creators/animal';

interface AnimalItemProps {
	animal: IAnimal;
	active?: boolean;
}

const AnimalItem: React.FC<AnimalItemProps> = ({ animal, active = false }) => {
	const router = useRouter()
	return (
		<div className="col-lg-3 col-md-6 col-sm-12 my-3">
			<div className="foto">
				<a onClick={() => router.push('/animals/' + animal.id)}>
					<img className="full-width" src={'http://localhost:7777/' + animal.picture} />
				</a>
			</div>
			<div className="data">Размещено:   {animal.createdAt}</div>
			<div><h2>{animal.title}</h2></div>
			<div style={{ fontSize: 16, color: '#333' }}>{animal.body}</div>
			{/* <button
				className=""
				onClick={onRemoveFromBasket}
				type="button"
			>
				Удалить
			</button> */}
		</div>
	);
};

export default AnimalItem;

// export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
//     const dispatch = context.store.dispatch as NextThunkDispatch
//     await dispatch(await animalsDelete(_id))
// })