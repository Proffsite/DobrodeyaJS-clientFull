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
	//const { animals, error } = useTypedSelector(state => state.animal);
	return (
		<>
			<MainLayout title={"Список животных - Добродея"}>
				Список животных
				<button onClick={() => router.push('/animals/create')}>
					Загрузить
				</button>
				<AnimalList animals={animals} />
			</MainLayout>

		</>
	);
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	try {
		const animals = await Api().animal.getAll();
		return {
			props: {
				animals,
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

