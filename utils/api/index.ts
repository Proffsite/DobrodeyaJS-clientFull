import axios from "axios";
import { GetServerSidePropsContext, NextPageContext } from "next";
import Cookies, { parseCookies } from "nookies";
import { AnimalApi } from './animal';
import { NewApi } from './new';
import { UserApi } from "./user";

export type ApiReturnType = {
	user: ReturnType<typeof UserApi>;
	animal: ReturnType<typeof AnimalApi>;
	new: ReturnType<typeof NewApi>;
}

export const Api = (ctx?: NextPageContext | GetServerSidePropsContext): ApiReturnType => {
	const cookies = ctx ? Cookies.get(ctx) : parseCookies();
	const token = cookies.authToken;

	const instance = axios.create({
		baseURL: 'http://localhost:7777',
		headers: {
			Authorization: 'Bearer ' + token,
		},
	});
	return {
		user: UserApi(instance),
		animal: AnimalApi(instance),
		new: NewApi(instance),
	}

};