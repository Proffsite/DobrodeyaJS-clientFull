import { AxiosInstance } from 'axios';
import { IAnimal } from '../../types/animal';

type CreateAnimalDto = {
	title: string;
	body: string;
	description?: string;
	age: string;
	picture: string;
	sex: string;
	type: string;
	category: string;
}

export const AnimalApi = (instance: AxiosInstance) => ({
	async getAll() {
		const { data } = await instance.get('/animals');
		return data;
	},

	async create(dto: CreateAnimalDto) {
		const { data } = await instance.post('/animals', dto);
		return data;
	},
	async getOne(id: number) {
		const { data } = await instance.get<IAnimal>(`/animals/${id}`);
		return data;
	},

});