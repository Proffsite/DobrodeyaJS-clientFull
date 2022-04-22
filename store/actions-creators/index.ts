
// import { animalsDelete, fetchAnimals } from './animal';
// import { fetchNews, newsDelete } from './new';
// import { fetchUser } from './user';


// export default {
// 	animalsDel: animalsDelete,
// 	animalsGet: fetchAnimals,
// 	newsGet: fetchNews,
// 	newsDel: newsDelete,
// 	usersGet: fetchUser,
// }

import * as UserActionCreators from '../actions-creators/user'

export default {
	...UserActionCreators
}