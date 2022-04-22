import * as yup from "yup";

export const LoginFormSchema = yup.object({
	email: yup.string().required('Электронная почта обязательна для заполнения'),
	password: yup.string().min(8, 'Длина пароля должна быть более 8 символов').required('Пароль обязательный'),
}).required();

// Добавить уникальное имя, или не надо