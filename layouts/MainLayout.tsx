import React from 'react';
import Navbar from "../components/Navbar";
import Head from "next/head";
import Footer from '../components/Footer';


interface MainLayoutProps {
	title?: string;
	description?: string;
	keywords?: string;
}




const MainLayout: React.FC<MainLayoutProps>
	= ({
		children,
		title,
		description,
		keywords
	}) => {

		return (
			<>
				<Head>
					<title>{title || 'Приют для животных г.Белоярский. Приют предназначен для помощи бездомным, брошенным и больным животным. Хотите помочь приюту? Или забрать животного домой? Звоните!'}</title>
					<meta name="description" content={`Музыкальная площадка. Здесь каждый может оставить свой трек и стать знаменитым.` + description} />
					<meta name="robots" content="index, follow" />
					<meta name="keywords" content={keywords || "Белоярский, Приют, Животные, Бездомные"} />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
					<link href="https://fonts.googleapis.com/css2?family=Vollkorn:ital,wght@0,400;0,500;0,700;0,900;1,400;1,900&display=swap" rel="stylesheet" />
				</Head>
				<Navbar />
				<div className="container">
					{children}
				</div>
				<Footer />
			</>
		);
	};

export default MainLayout;