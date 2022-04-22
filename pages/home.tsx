import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';


import AnimalList from '../components/AnimalList';
import { useTypedSelector } from '../hooks/useTypedSelector';
import MainLayout from '../layouts/MainLayout';
import { NextThunkDispatch, wrapper } from '../store';
import { fetchAnimals } from '../store/actions-creators/animal';

const Home = () => {

	const router = useRouter()
	const { animals, error } = useTypedSelector(state => state.animal)


	if (error) {
		return <MainLayout>
			<h1>{error}</h1>
		</MainLayout>
	}
	return (
		<>
			<MainLayout title={"Уже дома - Добродея"}>
				<AnimalList animals={animals} />
			</MainLayout>

		</>
	);
};

export default Home;


// export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(async (context) => {
// 	const { store, query } = context;
// 	const dispatch = store.dispatch as NextThunkDispatch;
// 	await dispatch(await fetchAnimals(query))
// })