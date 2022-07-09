import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from "next/router";


import { useTypedSelector } from "../../hooks/useTypedSelector";
import { NextThunkDispatch, wrapper } from "../../store";
import { fetchAnimals } from "../../store/actions-creators/animal";

import AnimalList from "../../components/AnimalList";
import MainLayout from '../../layouts/MainLayout';
import { Api } from '../../utils/api';

interface AnimalsProps {
	animals: any[];
}

const AnimalsPage: NextPage<AnimalsProps> = ({ animals }) => {
	const router = useRouter()
	const userData = useTypedSelector(state => state.user.data);
	//const { animals, error } = useTypedSelector(state => state.animal);
	return (
		<>
			<MainLayout title={"Список животных - Добродея"}>
				<h1>Список животных</h1>
				{
					!userData
						? ''
						: <button onClick={() => router.push('/animals/create')}>
							Загрузить
						</button>
				}

				<AnimalList animals={animals} />
			</MainLayout>

		</>
	);
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	try {
		const { category } = ctx.query
		const data2 = await Api().animal.getAll(category);
		return {
			props: {
				animals: data2.animals,
			}
		}
	} catch (error) {
		console.log("Animal page", error);
	}
	return {
		props: {
			animals: null,
		},
	};

};

export default AnimalsPage;

