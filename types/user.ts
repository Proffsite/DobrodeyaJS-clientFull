export enum UserRoles {
	ADMIN = 'admin',
	USER = 'user',
}



export enum UserActionTypes {
	SET_USERS_DATA = 'SET_USERS_DATA',
	FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
}

interface FetchUsersAction {
	type: UserActionTypes.SET_USERS_DATA;
	payload: string;
}

interface FetchUsersErrorAction {
	type: UserActionTypes.FETCH_USERS_ERROR;
	payload: string
}

export type UserAction = FetchUsersAction | FetchUsersErrorAction