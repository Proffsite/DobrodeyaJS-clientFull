import { Dispatch } from "react";
import { NewAction, NewActionTypes } from "../../types/new";
import axios from "axios";

export const fetchNews = (params?) => {
	return async (dispatch: Dispatch<NewAction>) => {
		try {
			const response = await axios.get('http://localhost:5000/news', { params })
			dispatch({
				type: NewActionTypes.FETCH_NEWS,
				payload: response.data
			})
		} catch (e) {
			dispatch({
				type: NewActionTypes.FETCH_NEWS_ERROR,
				payload: 'Произошла ошибка при загрузке новостей'
			})
		}
	}
}

export const newsDelete = (id) => {
	return async (dispatch: Dispatch<NewAction>) => {
		try {
			const response = await axios.delete('http://localhost:5000/news/' + id)
			dispatch({ type: NewActionTypes.NEWS_DELETE, payload: response.data })
		} catch (e) {
			dispatch({
				type: NewActionTypes.NEWS_DELETE_ERROR,
				payload: 'Произошла ошибка при удалении новости'
			})
		}
	}
}