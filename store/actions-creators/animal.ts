import { Dispatch } from "react";
import { AnimalAction, AnimalActionTypes } from "../../types/animal";
import axios from "axios";

export const fetchAnimals = (params?) => {
	return async (dispatch: Dispatch<AnimalAction>) => {
		try {
			const response = await axios.get('http://localhost:5000/animals', { params })
			dispatch({
				type: AnimalActionTypes.FETCH_ANIMALS,
				payload: response.data
			})
		} catch (e) {
			dispatch({
				type: AnimalActionTypes.FETCH_ANIMALS_ERROR,
				payload: 'Произошла ошибка при загрузке животных'
			})
		}
	}
}

export const animalsDelete = (id) => {
	return async (dispatch: Dispatch<AnimalAction>) => {
		try {
			const response = await axios.delete('http://localhost:5000/animals/' + id)
			dispatch({ type: AnimalActionTypes.ANIMALS_DELETE, payload: response.data })
		} catch (e) {
			dispatch({
				type: AnimalActionTypes.ANIMALS_DELETE_ERROR,
				payload: 'Произошла ошибка при удалении животного'
			})
		}
	}
}