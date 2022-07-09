import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from "next/router";

import { useTypedSelector } from "../../hooks/useTypedSelector";
import { NextThunkDispatch, wrapper } from "../../store";
import { fetchNews } from '../../store/actions-creators/new';

import NewList from '../../components/NewList';
import MainLayout from '../../layouts/MainLayout';
import { Api } from '../../utils/api';
import { NewsItem } from '../../utils/api/types';
import { INew } from '../../types/new';

interface NewsProps {
	news: INew[];
}


const NewsPage: NextPage<NewsProps> = ({ news }) => {

	const router = useRouter()
	const userData = useTypedSelector(state => state.user.data)

	return (
		<MainLayout title={"Новости - Добродея"}>
			Новости
			{
				!userData
					? ''
					: <button onClick={() => router.push('/news/create')}>
						Добавить
					</button>
			}

			<NewList news={news} />
		</MainLayout>
	);
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	try {
		const news = await Api().new.getAll();
		return {
			props: {
				news,
			}
		}
	} catch (error) {
		console.log(error);
	}
	return {
		props: {
			news: null,
		},
	};

};

export default NewsPage;




	// const { news, error } = useTypedSelector(state => state.new1)

	// if (error) {
	// 	return <MainLayout>
	// 		<h1>{error}</h1>
	// 	</MainLayout>
	// }



// export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(async (context) => {
// 	const { store, query } = context;
// 	const dispatch = store.dispatch as NextThunkDispatch;
// 	await dispatch(await fetchNews(query))
// })