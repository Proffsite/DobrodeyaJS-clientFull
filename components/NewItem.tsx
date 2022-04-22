import React from 'react';
import { INew } from "../types/new";
import { useRouter } from "next/router";
import { useDispatch } from 'react-redux';
import { newsDelete } from '../store/actions-creators/new';
import { string } from 'yup/lib/locale';
import Link from 'next/link';

interface NewItemProps {
	new1: INew;
	active?: boolean;
}

const NewItem: React.FC<NewItemProps> = ({ new1, active = false }) => {
	const router = useRouter()
	const dispatch = useDispatch()
	// const onRemoveFromBasket = () => {
	// 	dispatch(newsDelete(new1._id));
	// }

	return (
		<div className="col-lg-3 col-md-6 col-sm-12 my-3">
			<div className="foto">
				<Link href={`/news/${new1.id}`}>
					<a>
						<img className="full-width" src={'http://localhost:7777/' + new1.picture} />
					</a></Link>
			</div>
			<div>Размещено:{new1.createdAt}</div>
			<div>{new1.title}</div>
			<div style={{ fontSize: 12, color: 'gray' }}>{new1.body}</div>
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

export default NewItem;




// export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
//     const dispatch = context.store.dispatch as NextThunkDispatch
//     await dispatch(await animalsDelete(_id))
// })