import React, { useState } from 'react';
import Image from 'next/image'
import axios from "axios";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";


import { IAnimal } from "../../types/animal";
import MainLayout from '../../layouts/MainLayout';
import { Api } from '../../utils/api';

const AnimalPage = ({ animalsItem }) => {
	const router = useRouter()
	const data = animalsItem.createdAt.slice(0, 10);
	return (
		<MainLayout
			title={"Приют Добродея, г.Белоярский - " + animalsItem.title}
			keywords={'Приют, добродея, ' + animalsItem.title + ", " + animalsItem.tags}
		>
			<button
				style={{ fontSize: 32 }}
				onClick={() => router.back()}
			>
				К списку
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
					<div className="col-md-7 col-sm-12 p-0 mb-3 ps-3">
						<h1>{animalsItem.title}</h1>
						<div>Пол: <b>{animalsItem.sex}</b></div>
						<div className="mb-2">Возраст: <b>{animalsItem.age}</b></div>
						<div className="ms-1 fs-3">Описание:</div>
						<div>{animalsItem.body}</div>
						<div>{data}</div>
					</div>
				</div>
			</div>
		</MainLayout>
	);
};

export default AnimalPage;

// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
// 	const response = await axios.get('http://localhost:5000/animals/' + params.id)
// 	return {
// 		props: {
// 			serverAnimal: response.data
// 		}
// 	}
// }

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	try {
		const id = params.id;
		const animalsItem = await Api().animal.getOne(+id);

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
