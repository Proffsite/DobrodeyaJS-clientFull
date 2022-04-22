import React, { useState } from 'react';
import Image from 'next/image'
import axios from "axios";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";


import { INew } from "../../types/new";
import { useInput } from "../../hooks/useInput";
import MainLayout from '../../layouts/MainLayout';
import { Api } from '../../utils/api';

const NewPage = ({ newsItem }) => {
	const router = useRouter()
	return (
		<MainLayout
			title={"Приют Добродея, г.Белоярский - " + newsItem.title}
			keywords={'Приют, добродея, ' + newsItem.title}
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
							src={'http://localhost:7777/' + newsItem.picture}
							alt="News from priut Dobrodeya86"
							layout="responsive"
							width={525}
							height={700} />
					</div>
					<div className="col-md-7 col-sm-12 p-0 mb-3 ps-3">
						<h1>{newsItem.title}</h1>
						<div>{newsItem.body}</div>
						<div>Размещено: {newsItem.createdAt}</div>
					</div>
				</div>
			</div>
		</MainLayout>
	);
};

export default NewPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	try {
		const id = ctx.params.id;
		const newsItem = await Api(ctx).new.getOne(+id);

		return {
			props: {
				newsItem,
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

