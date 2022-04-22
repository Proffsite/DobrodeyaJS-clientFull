

import { Dispatch } from "react";
import { UserAction, UserActionTypes } from "../../types/user";
import axios from "axios";

export const fetchUser = () => {
	return async (dispatch: Dispatch<UserAction>) => {
		try {
			const response = await axios.get('http://localhost:5000/login', {})
			dispatch({
				type: UserActionTypes.SET_USERS_DATA,
				payload: response.data
			})
		} catch (e) {
			dispatch({
				type: UserActionTypes.FETCH_USERS_ERROR,
				payload: 'Произошла ошибка при получении информации о пользователе'
			})
		}
	}
}

export const setUserData = (data: any): UserAction => {
	return {
		type: UserActionTypes.SET_USERS_DATA,
		payload: data

	}

	// export const setUserData = (data: string) => {
	// 	return (dispatch: Dispatch<UserAction>) => {
	// 		dispatch({
	// 			type: UserActionTypes.SET_USERS_DATA,
	// 			payload: data
	// 		})
	// 	}
}