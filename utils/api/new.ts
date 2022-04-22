import { AxiosInstance } from 'axios';
import { NewsItem } from './types';

type CreateNewDto = {
	name: string;
	text: string;
	picture: string;
}


export const NewApi = (instance: AxiosInstance) => ({
	async getAll() {
		const { data } = await instance.get<NewsItem[]>('/news');
		return data;
	},
	async getOne(id: number) {
		const { data } = await instance.get<NewsItem>(`/news/${id}`);
		return data;
	},
	async create(dto) {
		const { data } = await instance.post<CreateNewDto, { data: NewsItem }>('/news', dto);
		return data;
	},

});