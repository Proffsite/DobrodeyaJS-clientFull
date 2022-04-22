import { UserAction, UserActionTypes } from "../../types/user";
import { ResponseUser } from '../../utils/api/types';

export interface UserState {
	data?: string | null;
	error: string;
}

const initialState: UserState = {
	data: null,
	error: ''
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
	switch (action.type) {
		case UserActionTypes.SET_USERS_DATA:
			return {
				error: '',
				data: action.payload,
			}
		case UserActionTypes.FETCH_USERS_ERROR:
			return {
				...state,
				error: action.payload
			}
		default:
			return state

	}
}



		// case PlayerActionTypes.PAUSE:
		// 	return { ...state, pause: true }
		// case PlayerActionTypes.PLAY:
		// 	return { ...state, pause: false }
		// case PlayerActionTypes.SET_CURRENT_TIME:
		// 	return { ...state, currentTime: action.payload }
		// case PlayerActionTypes.SET_VOLUME:
		// 	return { ...state, volume: action.payload }
		// case PlayerActionTypes.SET_DURATION:
		// 	return { ...state, duration: action.payload }
		// case PlayerActionTypes.SET_ACTIVE:
		// 	return { ...state, active: action.payload, duration: 0, currentTime: 0 }