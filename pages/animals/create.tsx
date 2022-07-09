import React, { useState } from 'react';
import FileUpload from "../../components/FileUpload";
import { useRouter } from "next/router";
import MainLayout from '../../layouts/MainLayout';
import { Api } from '../../utils/api';
import { parseCookies } from 'nookies';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Button, FormControl, Input, TextField } from '@material-ui/core';
import { IAnimal } from '../../types/animal';
import { Alert, AlertTitle } from '@material-ui/lab';


interface AddAnimalProps {
	data?: IAnimal;
}

const CreateAnimals: React.FC<AddAnimalProps> = ({ data }) => {
	const [picture, setPicture] = useState(null)
	const [isLoading, setLoading] = useState(false);
	
	const router = useRouter()


	const [title, setTitle] = React.useState(data?.title || '');
	const [body, setBody] = React.useState(data?.body || '');
	const [age, setAge] = React.useState(data?.age || '');
	const [sex, setSex] = React.useState(data?.sex || 'М');
	const [category, setCategory] = React.useState(data?.category || 'Cats');


	const onAddAnimal = async () => {
		try {
			setLoading(true);
			const formData = new FormData()
			formData.append('title', title)
			formData.append('body', body)
			formData.append('age', age)
			formData.append('picture', picture)
			formData.append('sex', sex)
			formData.append('category', category)
			if (!data) {
				const data = await Api().animal.create(formData);
				await router.push('/animals');
			} else {
				//await Api().animal.update(data.id, obj);
			}
		} catch (err) {
			console.warn('Create animal error', err);
			alert(err);
		} finally {
			setLoading(false);
		}
	};

	return (
		<MainLayout>
			<div className='row align-items-center'>
				<div className='col-sm-12 col-md-6'>
				<div style={{ padding: 25 }}>
					<div>
						<Input
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							placeholder="Имя животного"
							autoFocus={true}
							fullWidth={true}
						/> 
						</div>

						<TextField
							id="standard-textarea"
							label="Описание животного"
							placeholder="Описание животного"
							multiline
							value={body}
							onChange={(e) => setBody(e.target.value)}
							rows={4}
							variant="standard"
							fullWidth={true}
						/> <br />

						
						<Input
							value={age}
							onChange={(e) => setAge(e.target.value)}
							placeholder="Возраст животного"
						/><br />
						<TextField
						select onChange={(e) => setSex(e.target.value)} defaultValue="М" required>
          					<option value="М">М</option>
         					<option value="Ж">Ж</option>
       					 </TextField>
						<br />
						<TextField
						select
						onChange={(e) => setCategory(e.target.value)}
						defaultValue="Кошка"
						required>
          					<option value="Cats">Кошка</option>
         					<option value="Dogs">Собака</option>							
         					<option value="Home">Дома</option>
       					 </TextField>
					</div>
						
					<FileUpload setFile={setPicture} accept="image/*">
						<button style={{ margin: 25 }}>Загрузить изображение</button>
					</FileUpload>
					{
						!picture
							? ''
							: <Alert severity="success">
								<AlertTitle>Файл успешно загружен</AlertTitle>
								Нажмите "сохранить" <strong>чтобы разместить статью!</strong>
							</Alert>
					}
					<Button style={{ margin: 25 }}  disabled={isLoading || !title || !body || !picture} onClick={onAddAnimal} variant="contained" color="secondary">
						Сохранить
					</Button>
				</div>
			</div>
		</MainLayout >
	);
};

export default CreateAnimals;



{/* <p>Описание</p>
							<textarea
								type="text"
								rows="3"
								{...body}
								style={{}}
							/> */}
						{/* <p>Примерный возраст
								<input type="text"
									{...age}
									style={{ marginTop: 10 }}
								/></p> */}
	{/* <p>Дата попадания в приют
					<input type="text"
						{...date}
						style={{ marginTop: 10 }}
					/></p> */}
						{/* <Select
							onChange={(e) => setAge(e.target.value)}
							value={sex}
							defaultValue="М"
							variant="standard">
							<MenuItem value='М'>М</MenuItem>
							<MenuItem value='Ж'>Ж</MenuItem>
						</Select> */}

						{/* <input type="text"
						{...sex}
						style={{ marginTop: 10 }}
					/> */}
							{/* <Select
								onChange={(e) => setAge(e.target.value)}
								value={category}
								variant="standard"
							>
								<MenuItem value={'Cats'}>Кошка</MenuItem>
								<MenuItem value={'Dogs'}>Собака</MenuItem>
								<MenuItem value={'Home'}>Уже дома</MenuItem>
							</Select> */}
							{/* <input type="text"
							{...category}
							style={{ marginTop: 10 }}
						/> */}

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

	
	// const defaultValues = {
	// 	title: "",
	// 	body: "",
	// 	age: "",
	// 	sex: "",
	// 	category: "",
	// };

	// const [formValues, setFormValues] = useState(defaultValues)



	// const onAddAnimal = async () => {
	// 	const cookies = parseCookies();
	// 	const token = cookies.authToken;
	// 	const formData = new FormData()
	// 	formData.append('title', title.value)
	// 	formData.append('body', body.value)
	// 	formData.append('age', age.value)
	// 	formData.append('picture', picture)
	// 	formData.append('sex', formValues.sex)
	// 	formData.append('category', formValues.category)
	// 	try {

	// 		await axios.post('http://localhost:7777/animals', formData,
	// 			{
	// 				headers: {
	// 					Authorization: 'Bearer ' + token,
	// 				}
	// 			})
	// 			.then(resp => router.push('/animals'))
	// 			.catch(e => console.log(e))

	// 	} catch (err) {
	// 		console.warn('Create new', err);
	// 		alert(err);
	// 	}
	// };