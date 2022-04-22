import { NewAction, NewActionTypes, NewState } from "../../types/new";

const initialState: NewState = {
	news: [],
	error: ''
}

export const newReducer = (state = initialState, action: NewAction): NewState => {
	switch (action.type) {
		case NewActionTypes.FETCH_NEWS:
			return { error: '', news: action.payload }
		case NewActionTypes.FETCH_NEWS_ERROR:
			return { ...state, error: action.payload }

		case NewActionTypes.NEWS_DELETE:
			return { ...state, news: state.news.filter((news) => news._id !== action.payload) };
		case NewActionTypes.NEWS_DELETE_ERROR:
			return { ...state, error: action.payload }
		default:
			return state
	}
}
