import React, { useState } from 'react';
import axios from "axios";
import { useRouter } from "next/router";
import { Button, Input } from '@material-ui/core';

import Cookies, { parseCookies } from "nookies";

import FileUpload from "../../components/FileUpload";
import MainLayout from '../../layouts/MainLayout';
import styles from './CreateNews.module.scss';
import { Api } from '../../utils/api';
import { NewsItem } from '../../utils/api/types';
import { GetServerSideProps } from 'next';
import { title } from 'process';

interface CreateNewsProps {
	data?: NewsItem;
}

const CreateNews: React.FC<CreateNewsProps> = ({ data }) => {
	const [picture, setPicture] = useState(null);
	const [isLoading, setLoading] = React.useState(false);
	const [title, setTitle] = React.useState('');
	const [body, setBody] = React.useState('');

	const router = useRouter()

	const onAddNew = async () => {
		try {
			setLoading(true);
			const obj = {
				title,
				body,
				picture
			};
			console.log(picture, 'picture upload')
			if (!data) {
				const data = await Api().new.create(obj);
				await router.push(`/news`);
			}
		} catch (err) {
			console.warn('Create new', err);
			alert(err);
		} finally {
			setLoading(false);
		}

	};
	return (
		<MainLayout>
			<div className='container'>
				<div className='row align-items-center'>
					<div className='col-sm-6 col-md-6'>
						<label htmlFor="nameNews">Введите заглавие новости</label>
						<Input
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							classes={{ root: styles.titleField }}
							placeholder="Заголовок"
						/>


						<Input
							value={body}
							onChange={(e) => setBody(e.target.value)}
							classes={{ root: styles.editor }}
							placeholder="Текст новости"
						/>

						<FileUpload setFile={setPicture} accept="image/*">
							<button>Загрузить изображение</button>
						</FileUpload>

						<Button disabled={isLoading || !title || !body} onClick={onAddNew} variant="contained" color="primary">
							Сохранить
						</Button>
					</div>
				</div>
			</div>

		</MainLayout>
	);
};

export default CreateNews;