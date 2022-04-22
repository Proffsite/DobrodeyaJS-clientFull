import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from "next/router";
import MainLayout from '../../layouts/MainLayout';
import { Api } from '../../utils/api';


const WritePage: NextPage = () => {

	const router = useRouter()

	return (
		<MainLayout title={"Новости - Добродея"}>
			Новости
			<button>
				Добавить
			</button>
		</MainLayout>
	);
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	try {

		const id = ctx.params.id;
		const newsItem = await Api().new.getOne(+id);
		return {
			props: {
				newsItem,
			},
		};
	} catch (error) {
		console.log('Write page', error);
		return {
			props: {},
			redirect: {
				destination: '/',
				permanent: false,
			}
		};
	}
};
export default WritePage;