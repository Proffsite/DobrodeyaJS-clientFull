import React from 'react';
import Image from 'next/image'
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";

import MainLayout from '../../layouts/MainLayout';
import { Api } from '../../utils/api';
import Button from '@material-ui/core/Button';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { WriteForm } from '../../components/WriteForm';

const AnimalPage = ({ animalsItem }) => {
	const userData = useTypedSelector(state => state.user.data);
	const router = useRouter();
	return (
		<MainLayout
			title={"Приют Добродея, г.Белоярский - " + animalsItem.title}
			keywords={'Приют, добродея, ' + animalsItem.title + ", " + animalsItem.tags}
		>
			<button
				style={{ fontSize: 32, margin: 10 }}
				onClick={() => router.back()}
			>
				Назад
			</button>
			<div className="container">
				<div className="row">
					<div className="col-md-5 col-sm-12 p-10 mb-3">
						<Image
							src={'http://localhost:7777/' + animalsItem.picture}
							alt="Animals from priut Dobrodeya86"
							width={525}
							height={700} />
					</div>
					<div className="col-md-7 col-sm-12 p-0 mb-3 ps-3 animal">
						<h1>{animalsItem.title}</h1>
						<div className='sex'>Пол: <b>{animalsItem.sex}</b></div>
						<div className="mb-2 age">Возраст: <b>{animalsItem.age}</b></div>
						<div className="ms-1 fs-3 body-title">Описание:</div>
						<div className='body'>{animalsItem.body}</div>
						<div className='data'>Размещено: {animalsItem.createdAt.slice(0, 10)}</div>
					</div>
				</div>
				{
					!userData ? ''
					:
					<WriteForm animal={animalsItem} />
						}
				
			</div>
		</MainLayout >
	);
};

export default AnimalPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	try {
		const id = params.id.toString();
		const animalsItem = await Api().animal.getOne(id);

		return {
			props: {
				animalsItem,
			},
		};
	} catch (err) {
		console.log('Full newsItem page', err);
		return {
			props: {},
			redirect: {
				destination: '/',
				permanent: false,
			},
		};
	}
};
