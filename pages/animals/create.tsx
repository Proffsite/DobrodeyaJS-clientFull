import React, { useState } from 'react';
import StepTracker from "../../components/StepTracker";
import FileUpload from "../../components/FileUpload";
import { useInput } from "../../hooks/useInput";
import axios from "axios";
import { useRouter } from "next/router";
import MainLayout from '../../layouts/MainLayout';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Api } from '../../utils/api';
import { parseCookies } from 'nookies';

const Create: React.FC = () => {
	const [picture, setPicture] = useState(null)
	const [isLoading, setLoadnig] = useState(false);

	const title = useInput('')
	const body = useInput('')
	const age = useInput('')
	const sex = useInput('')
	const category = useInput('')
	const router = useRouter()


	const onAddAnimal = async () => {
		const cookies = parseCookies();
		const token = cookies.authToken;
		console.log(token, 'token')
		const formData = new FormData()
		formData.append('title', title.value)
		formData.append('body', body.value)
		formData.append('age', age.value)
		formData.append('picture', picture)
		formData.append('sex', sex.value)
		formData.append('category', category.value)
		try {

			await axios.post('http://localhost:7777/animals', formData,
				{
					headers: {
						Authorization: 'Bearer ' + token,
					}
				})
				.then(resp => router.push('/animals'))
				.catch(e => console.log(e))

		} catch (err) {
			console.warn('Create new', err);
			alert(err);
		}
	};

	return (
		<MainLayout>
			<form>
				<p>Имя
					<input type="text"
						{...title}
						style={{ marginTop: 10 }}
					/></p>
				<p>Описание
					<textarea
						type="text"
						rows="3"
						{...body}
						style={{ marginTop: 10 }}
					/></p>
				<p>Примерный возраст
					<input type="text"
						{...age}
						style={{ marginTop: 10 }}
					/></p>

				{/* <p>Дата попадания в приют
					<input type="text"
						{...date}
						style={{ marginTop: 10 }}
					/></p> */}
				<p>Пол (М, Ж)
					<input type="text"
						{...sex}
						style={{ marginTop: 10 }}
					/></p>
				<p>Категория (CATS = 'Cats',
					DOGS = 'Dogs',
					HOME = 'Home',)
					<input type="text"
						{...category}
						style={{ marginTop: 10 }}
					/></p>
			</form>
			<FileUpload setFile={setPicture} accept="image/*">
				<button>Загрузить изображение</button>
			</FileUpload>
			<div className="pb-5">
				<button onClick={onAddAnimal}>Создать</button>
			</div>
		</MainLayout>
	);
};

export default Create;


	// const onAddAnimal = async (formData) => {
	// 	try {
	// 		setLoadnig(true);
	// 		console.log()
	// 		const animal = await Api().animal.create({
	// 			name,
	// 			age,
	// 			text,
	// 			date,
	// 			picture,
	// 			sex,
	// 			type,
	// 			category,
	// 		})
	// 		console.log(animal);
	// 	} catch (error) {
	// 		console.warn('Create animal', error);
	// 		alert(error);
	// 	} finally {
	// 		setLoadnig(false);
	// 	}
	// }