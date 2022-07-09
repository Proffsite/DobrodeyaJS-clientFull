import React, { useState } from 'react';
import { Button, Input, Select, TextField } from '@material-ui/core';
import styles from './WriteForm.module.scss';
//import dynamic from 'next/dynamic';
import { Api } from '../../utils/api';
import { IAnimal } from '../../types/animal';
import { useRouter } from 'next/router';
import { Alert, AlertTitle } from '@material-ui/lab';
import FileUpload from '../FileUpload';
import MainLayout from '../../layouts/MainLayout';

//const Editor = dynamic(() => import('../Editor').then((m) => m.Editor), { ssr: false });

interface WriteFormProps {
  animal?: IAnimal;
}

export const WriteForm: React.FC<WriteFormProps> = ({ animal }) => {
  const router = useRouter();
  const [picture, setPicture] = useState(null)
  const [isLoading, setLoading] = useState(false);

  const [title, setTitle] = React.useState(animal?.title || '');
  const [body, setBody] = React.useState(animal?.body || '');
  const [age, setAge] = React.useState(animal?.age || '');
  const [sex, setSex] = React.useState(animal?.sex || 'М');
  const [category, setCategory] = React.useState(animal?.category || 'Cats');

  
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
		if (!animal) {
			const data = await Api().animal.create(formData);
			await router.push('/animals');
		} else {
			await Api().animal.update(animal.id, formData);
		}
	} catch (err) {
		console.warn('Create animal error', err);
		alert(err);
	} finally {
		setLoading(false);
	}
};
  return (
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
					<Select
					onChange={(e) => setCategory(e.target.value)}
					defaultValue="Cats"
					required>
						  <option value="Cats">Кошка</option>
						 <option value="Dogs">Собака</option>							
						 <option value="Home">Дома</option>
						</Select>
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
  );
};




{/* const router = useRouter()


<div>
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        classes={{ root: styles.titleField }}
        placeholder="Заголовок"
      />
      <div className={styles.editor}>
        <Editor initialBlocks={data?.body} onChange={(arr) => setBlocks(arr)} />
      </div>
      <Button disabled={isLoading || !blocks.length || !title} onClick={onAddPost} variant="contained" color="primary">
        {data ? 'Сохранить' : 'Опубликовать'}
      </Button>
    </div>



return (
	 */}