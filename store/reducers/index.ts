import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import { animalReducer } from "./animalReducer";
import { newReducer } from './newReducer';
import { userReducer } from './userReducer';


const rootReducer = combineReducers({
	animal: animalReducer,
	new: newReducer,
	user: userReducer,
})



export const reducer = (state, action) => {
	switch (action.type) {
		case HYDRATE:
			return { ...state, ...action.payload };
		default:
			return rootReducer(state, action);
	}
};

// export const reducer = (state, action) => {
// 	if (action.type === HYDRATE) {
// 		const nextState = {
// 			...state, // use previous state
// 			...action.payload, // apply delta from hydration
// 		}
// 		// if (state.count) nextState.count = state.count // preserve count value on client side navigation
// 		// return nextState
// 	} else {
// 		return rootReducer(state, action)
// 	}
// }

export type RootState = ReturnType<typeof rootReducer>
