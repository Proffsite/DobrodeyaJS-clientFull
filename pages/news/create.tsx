import React, { useState } from 'react';
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
import { Alert, AlertTitle } from '@material-ui/lab';

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
			const formData = new FormData()
			formData.append('title', title)
			formData.append('body', body)
			formData.append('picture', picture)
			if (!data) {
				const data = await Api().new.create(formData);
				await router.push(`/news`);
			}
		} catch (err) {
			console.warn('Create new error', err);
			alert(err);
		} finally {
			setLoading(false);
		}

	};
	return (
		<MainLayout>
			<div className='row align-items-center'>
				<div className='col-sm-6 col-md-6'>
					<Input
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						classes={{ root: styles.titleField }}
						placeholder="Заголовок новости"
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
					{
						!picture
							? ''
							: <Alert severity="success">
								<AlertTitle>Файл успешно загружен</AlertTitle>
								Нажмите "сохранить" <strong>чтобы разместить статью!</strong>
							</Alert>
					}


					<Button disabled={isLoading || !title || !body || !picture} onClick={onAddNew} variant="contained" color="secondary" classes={{ root: styles.buttonMain }}>
						Сохранить
					</Button>
				</div>
			</div>
		</MainLayout>
	);
};

export default CreateNews;