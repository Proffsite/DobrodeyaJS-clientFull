import React, { FC } from 'react';
import { AppProps } from 'next/app';

import 'bootstrap/dist/css/bootstrap.css';
import "../css/customcss.scss";

import { NextThunkDispatch, wrapper } from '../store';


import { useDispatch } from 'react-redux';
import { parseCookies } from 'nookies';
import { UserApi } from '../utils/api/user';
import { setUserData } from '../store/actions-creators/user';
import { Api } from '../utils/api';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import { theme } from '../theme';
import { fetchAnimals } from '../store/actions-creators/animal';
import { fetchNews } from '../store/actions-creators/new';
import { NewApi } from '../utils/api/new';

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<MuiThemeProvider theme={theme}>
			<CssBaseline />
			<Component {...pageProps} />
		</MuiThemeProvider>
	)
};

App.getInitialProps = wrapper.getInitialAppProps((store) => async ({ ctx, Component }) => {


	const dispatch = store.dispatch as NextThunkDispatch;
	// await dispatch(await fetchAnimals(ctx.query))
	// await dispatch(await fetchNews(ctx.query))



	try {

		const userData = await Api(ctx).user.getMe();
		store.dispatch(setUserData(userData));


	} catch (error) {
		if (ctx.asPath === '/animals/create') {
			ctx.res.writeHead(302, {
				Location: '/403',
			});
			ctx.res.end();
		}

		//	console.log('_app initial error', error);
	};

	return {
		pageProps: {
			...(Component.getInitialProps ? await Component.getInitialProps({ ...ctx, store }) : {}),
		},
	};
});

export default wrapper.withRedux(App);


// store.dispatch(await fetchAnimals());
// 		store.dispatch(await fetchNews()