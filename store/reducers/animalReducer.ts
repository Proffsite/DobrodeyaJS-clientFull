import { AnimalAction, AnimalActionTypes, AnimalState } from "../../types/animal";

const initialState: AnimalState = {
	animals: [],
	error: ''
}

export const animalReducer = (state = initialState, action: AnimalAction): AnimalState => {
	switch (action.type) {
		case AnimalActionTypes.FETCH_ANIMALS:
			return { error: '', animals: action.payload }
		case AnimalActionTypes.FETCH_ANIMALS_ERROR:
			return { ...state, error: action.payload }

		case AnimalActionTypes.ANIMALS_DELETE:
			return { ...state, animals: state.animals.filter((animals) => animals._id !== action.payload) };
		case AnimalActionTypes.ANIMALS_DELETE_ERROR:
			return { ...state, error: action.payload }
		default:
			return state
	}
}
