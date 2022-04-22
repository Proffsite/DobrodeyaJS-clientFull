export interface INew {
	id: number;
	title: string;
	body: string;
	picture?: string;
	tags: null | string;
	views: number;
	createdAt: string;
	updatedAt: string;

}

export interface NewState {
	news: INew[];
	error: string;
}

export enum NewActionTypes {
	FETCH_NEWS = 'FETCH_NEWS',
	FETCH_NEWS_ERROR = 'FETCH_NEWS_ERROR',
	NEWS_DELETE = 'NEWS_DELETE',
	NEWS_DELETE_ERROR = 'NEWS_DELETE_ERROR'
}

interface FetchNewsAction {
	type: NewActionTypes.FETCH_NEWS;
	payload: INew[]
}

interface NewsDeleteAction {
	type: NewActionTypes.NEWS_DELETE;
	payload: number
}

interface NewsDeleteErrorAction {
	type: NewActionTypes.NEWS_DELETE_ERROR;
	payload: string
}

interface FetchNewsErrorAction {
	type: NewActionTypes.FETCH_NEWS_ERROR;
	payload: string
}

export type NewAction = FetchNewsAction | NewsDeleteAction | NewsDeleteErrorAction | FetchNewsErrorAction