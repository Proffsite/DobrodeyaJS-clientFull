import React from 'react';
import Image from 'next/image';
import sberFinance from '../../public/sber_finance.png';
import meatPhoto from '../../public/meat_photo.png';

const HelpStatic = () => {
	return (
		<>
			<div className="container row pt-5">
				<h1>Как помочь приюту?</h1>

				<div className="col-md-6 col-sm-12 border-help">
					<h4>Финансово:</h4>
					<h5>
						Карта Сбербанк приюта
					</h5>
					<h1>
						<Image
							src={sberFinance}
							alt="SberIcon"
							layout='fixed'
							width={26}
							height={26}
						/>
						5469 6700 4309 6521</h1><br />
					(держатель карты Дарья Александровна Ж.)<br />
					(обязательно с пометкой благотворительность!!!)<br />
					ОСТЕРЕГАЙТЕСЬ МОШЕННИКОВ!!!

				</div>
				<div className="col-md-6 col-sm-12 border-help">
					<h4>Пожертвование можно оставить:</h4>
					<p>
						в магазине "Мясной дворик" Оазис-Плаза
					</p>
					<Image
						src={meatPhoto}
						alt="PhotoDvorik"
						layout='responsive'
						width='100'
						height='100'
					/>
				</div>
			</div>
			<div className="row my-5">
				<div className="col-md-3 col-sm-6 border-help">
					<h2>
						Вещами
					</h2>
					<strong>Всегда нужна помощь:</strong>
					<ul>
						<li>Кормами</li>
						<li>Лекарствами</li>
						<li>Вещами</li>
						<li>Предметами быта и т.д.</li>
					</ul>
				</div>
				<div className="col-md-3 col-sm-6 border-help">
					<h2>
						Руками
					</h2>
					<p>
						Приюту постоянно требуются приходящие помощники-волонтёры для ухода за кошками и собаками, помощи в кормлении, уборке клеток и комнат, помощи в уходе и лечении животных.
					</p>
				</div>
				<div className="col-md-3 col-sm-6 border-help">
					<h2>
						Рекламой
					</h2>
					<p>Расскажите о приюте в социальных сетях.<br />
						Поделитесь любой нашей записью и дайте ссылку на сайт.<br />
						Расскажите о нас знакомым и друзьям.</p>
				</div>
				<div className="col-md-3 col-sm-6 border-help">
					<h2>
						Сделать подарок
					</h2>
					<p>
						Сделайте покупку в зоомагазине КотоПес (бывший магазин "Удача") - и будьте уверены, ее обязательно доставят в приют!
					</p>
				</div>
			</div>
		</>
	);
};

export default HelpStatic;