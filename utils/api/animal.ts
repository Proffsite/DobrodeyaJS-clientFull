import { AxiosInstance } from 'axios';
import { IAnimal } from '../../types/animal';

type CreateAnimalDto = {
	id?: string;
	title: string;
	body: string;
	age: string;
	picture: string;
	sex: string;
	category: string;
}

export const AnimalApi = (instance: AxiosInstance) => ({
	async getAll(category?) {
		if (category) {
			const { data } = await instance.get('/animals', { params: { category } });
			//console.log(data, 'data fetch Animals')
			return data;
		}
		const { data } = await instance.get('/animals');
		return data;
	},

	async create(dto) {
		const { data } = await instance.post<CreateAnimalDto, { data: IAnimal }>('/animals', dto);
		return data;
	},
	async getOne(id: string) {
		const { data } = await instance.get<IAnimal>(`/animals/${id}`);
		return data;
	},
	async update(id: string, dto: CreateAnimalDto) {
		const { data } = await instance.patch<CreateAnimalDto, { data: IAnimal }>(`/animals/${id}`, dto);
		return data;
	  },
	

});