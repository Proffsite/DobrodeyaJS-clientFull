export type LoginDto = {
	email: string;
	password: string;
}
export type CreateUserDto = {
	fullName: string;
} & LoginDto;

export type ResponseUser = {
	createdAt: string;
	email: string;
	fullName: string;
	id: number;
	commentsCount?: number;
	token: string;
	updatedAt: string;

}

// export type NewItem = {
// 	titleNew: string;
// 	textNew: string;
// };

export type NewsItem = {
	id: number;
	title: string;
	body: string;
	picture: string;
	tags: null | string;
	views: number;
	user: ResponseUser;
	createdAt: string;
	updatedAt: string;

}
