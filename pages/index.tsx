import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { NextPage } from 'next';


import animal_img from '../public/main_animal.png';
import HelpStatic from '../components/static/HelpStatic';

import { useTypedSelector } from "../hooks/useTypedSelector";
import AnimalList from '../components/AnimalList';
import NewList from '../components/NewList';
import BGImage from '../components/BGimage';
import inPriut from './/../public/in_priut.png';
import outPriut from '../public/out_priut.png';


import { GetServerSideProps } from 'next';
import { fetchAnimals } from '../store/actions-creators/animal';
import { fetchNews } from '../store/actions-creators/new';
import { fetchUser } from '../store/actions-creators/user';
import { NextThunkDispatch, wrapper } from '../store';


import MainLayout from '../layouts/MainLayout';
import { Api } from '../utils/api';
import { INew } from '../types/new';
import { IAnimal } from '../types/animal';

interface MainProps {
	newsItem: INew[];
	animalsItem: IAnimal[];
}



const BgImage = dynamic(() => import("../components/BGimage"), {
	ssr: false,
});

const Main: NextPage<MainProps> = ({ newsItem, animalsItem }) => {

	const NotHomeAnimal = animalsItem.filter(item => item.category !== 'Home').length;
	const HomeAnimal = animalsItem.filter(item => item.category == 'Home').length;

	// if (error) {
	// 	return <MainLayout>
	// 		<h1>{error}</h1>
	// 	</MainLayout>
	// }

	return (
		<>
			<MainLayout>
				<div className="row align-items-center">
					<div className="col-sm-3 title">
						Мы Тебя ждём.<br />
						Ты заходи, если что!
					</div>
					<div className="col-sm-6">
						<Image
							alt="Main animal"
							src={animal_img}
							layout="responsive"
						/>
					</div>
					<div className="col-sm-3 button">
						<button className="ripple">Хочу помочь</button></div>
				</div>
				<div className="container pt-5 relat">
					<div className="row">
						<div className="box">
							<BGImage srcImage='/parus.png' />
						</div>
						<div className="col-md-6 col-sm-12">
							<div className="title">Приют для животных “Добродея”</div>
							<p>
								Что убеждённость некоторых оппонентов создаёт предпосылки для
								вывода текущих активов.Следует отметить, что курс на
								социально-ориентированный национальный проект способствует
								повышению качества глубокомысленных рассуждений.
							</p>
							<p>
								Равным образом, выбранный нами инновационный путь требует
								анализа экономической целесообразности принимаемых решений.С
								учётом сложившейся международной обстановки, сплочённость
								команды профессионалов способствует повышению качества системы
								обучения кадров, соответствующей насущным потребностям.
							</p>
						</div>
						<div className="block col-md-6 col-sm-12">
							<div className="block_numbers">
								<div className="items">
									<div className="item">
										<div className="icon">
											<Image
												src={inPriut}
												alt="InDobrodeya"
												layout='fixed'
												width={70}
												height={52}
											/>
										</div>
										<div className="number">
											{NotHomeAnimal}
										</div>
										<div className="name">Сейчас <br />в приюте</div>
									</div>
									<div className="item">
										<div className="icon">
											<Image
												src={outPriut}
												alt="InDobrodeya"
												layout='fixed'
												width={70}
												height={57}
											/>
										</div>
										<div className="number">{HomeAnimal}</div>
										<div className="name">Нашли <br />свой дом</div>
									</div>
								</div>
							</div>
							<div className="block_inner">

							</div>
						</div>
					</div>
				</div>

				<HelpStatic />

				<h1>Ищут дом: </h1>
				{
					animalsItem && animalsItem.length === 0 ?
						<h5>В БД нет животных</h5>
						:
						<AnimalList animals={animalsItem.slice(0, 4)} />
				}


				<h1>Последние новости: </h1>
				{
					newsItem && newsItem.length === 0 ?
						<h5>Новостей пока нет</h5>
						:
						<NewList news={newsItem.slice(0, 4)} />
				}

			</MainLayout>
		</>
	);
};
export default Main;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	try {

		const newsItem = await Api().new.getAll();
		const animalsItem = await Api().animal.getAll();
		return {
			props: {
				newsItem,
				animalsItem,
			},
		};
	} catch (error) {
		console.log('Main page', error);
		return {
			props: {},
			redirect: {
				destination: '/',
				permanent: false,
			}
		};
	}
};

// export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(async (context) => {
// 	const { store, query } = context;
// 	const dispatch = store.dispatch as NextThunkDispatch;
// 	await dispatch(await fetchAnimals(query))
// 	await dispatch(await fetchNews(query))
// 	await dispatch(await fetchUser())

	// try {
	// 	const { authToken } = parseCookies(context);
	// 	const userData = UserApi.getMe(authToken);
	// } catch (error) {
	// 	console.log(error);
	// 	return { props: {} }
	// }
//})