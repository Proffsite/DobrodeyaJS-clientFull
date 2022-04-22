import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from "next/router";
import dynamic from 'next/dynamic';

import logo from '../public/logosobaka.png';
import BGImage from '../components/BGimage';

const BgImage = dynamic(() => import("../components/BGimage"), {
	ssr: false,
});

const menuItemsLeft = [
	{ text: 'О Приюте', href: '/' },
	{ text: 'Кошки', href: '/animals?type=CAT' },
	{ text: 'Собаки', href: '/animals?type=DOGS' },
	{ text: 'Уже дома', href: '/home?type=HOME' }
]
const menuItemsRight = [
	{ text: 'Как помочь приюту?', href: '/help' },
	{ text: 'Фин.Отчёт', href: 'https://vk.com/topic-172407402_39312828' },
	{ text: 'Новости', href: '/news' },
	{ text: 'Контакты', href: '/contacts' }
]

const Footer: React.FC = () => {
	const router = useRouter();
	return (
		<footer>
			{/* <div className="box-footer">
		 		<BGImage srcImage='/image_footer.jpg' />
		 	</div> */}
			<div className="container pt-5 border-bottom">
				<div className="row">
					<div className="col-md-3 col-sm-12 mb-3 text-center">
						<div className="logo_footer">
							<a href="https://dobrodeya86.ru">
								<Image
									alt="Dobrodeya86"
									src={logo}
									layout="fixed"
									width={200}
									height={100}
								/>
							</a>
						</div>
					</div>
					<div className="col-md-9 col-sm-12">
						<div className="row">
							<div className="col-md-4 col-sm-6 col-6">
								<ul id="main_menu_left" className="navbar-nav ml-auto mr-md-3">
									{menuItemsLeft.map(({ text, href }, index) => (
										<li key={index}>
											<Link href={href}>
												<a className={router.asPath === href ? "activeMenu" : ''}> {text} </a>
											</Link>
										</li>
									))}
								</ul>
							</div>
							<div className="col-md-4 col-sm-6 col-6">
								<ul id="menu-main_menu_right" className="navbar-nav ml-auto mr-md-3">
									{menuItemsRight.map(({ text, href }, index) => (
										<li key={index}>
											<Link href={href}>
												<a className={router.asPath === href ? "activeMenu" : ''}> {text} </a>
											</Link>
										</li>
									))}
								</ul>
							</div>
							<div className="col-md-4 col-sm-6 col-6">
								<li className="list-group-item bg-transparent border-0 p-0 mb-2"><Link href="/login"><a>Вход на сайт</a></Link></li>
								<li className="list-group-item bg-transparent border-0 p-0 mb-2"><Link href="/register"><a>Регистрация</a></Link></li>

								<div className="contacts">
									<div>
										<a href="#callback_modal" className="callback_link modal_link">Написать нам</a>
									</div>
									<a className="phone" style={{ textDecoration: 'none' }} href="tel:89825370042">8 982 537 00 42</a>
								</div>

							</div>
						</div>
					</div>
				</div>
				<div className="col-md-12">
					<div className="py-4 d-flex justify-content-center align-items-centery">
						<a className="mx-4" href="/politika-konfidencialnosti/">Политика конфиденциальности</a>
						<a href="#" target="_blank" rel="noopener"><span>Разработка сайта</span> - Александр</a>
					</div>
				</div>

			</div>
		</footer >
	);
};

export default Footer;