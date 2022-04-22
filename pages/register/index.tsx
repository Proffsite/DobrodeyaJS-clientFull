import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { setCookie } from 'nookies';

import { useInput } from "../../hooks/useInput";
import { LoginFormSchema } from '../../utils/loginValidation';
import { CreateUserDto } from '../../utils/api/types';
import { UserApi } from '../../utils/api/user';
import MainLayout from '../../layouts/MainLayout';
import { Api } from '../../utils/api';

const Index = () => {
	const login = useInput('');
	const password = useInput('');
	const email = useInput('');
	const { register, handleSubmit, setError, formState: { errors } } = useForm({
		mode: 'onSubmit',
		shouldFocusError: true,
		resolver: yupResolver(LoginFormSchema),
	})
	const onSubmit = async (dto: CreateUserDto) => {
		try {
			const data = await Api().user.register(dto);
			setCookie(null, 'authToken', data.token, {
				maxAge: 30 * 24 * 60 * 60,
				path: '/',
			})
		} catch (error) {
			alert('Ошибка при регистрации')
			console.warn('Register error', error);
		}
	};

	return (
		<MainLayout>
			<h1>Зарегистрироваться на сайте:</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label>
					Логин:<br />
					<input type="text" {...register("name")} />
					{errors.name && <p>{errors.name.message}</p>}
				</label>
				<p />
				<label>
					Почта:<br />
					<input type="email" {...register("email")} />
					{errors.email && <p>{errors.email.message}</p>}
				</label>
				<p />
				<label>
					Пароль:<br />
					<input type="password" {...register("password")} />
					{errors.password && <p>{errors.password.message}</p>}
				</label>
				<p />
				<input type="submit" value="Войти" />
			</form>
		</MainLayout>
	);
};

export default Index;

function register(arg0: string): JSX.IntrinsicAttributes & React.ClassAttributes<HTMLInputElement> & React.InputHTMLAttributes<HTMLInputElement> {
	throw new Error('Function not implemented.');
}
