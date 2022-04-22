import React from 'react';

interface StepTrackerProps {
	activeStep: number;
}

const steps = ['Информация о животном', 'Загрузите фотографию', 'Загрузите сам звук']

const StepTracker: React.FC<StepTrackerProps> = ({ activeStep, children }) => {

	const className = (step) =>
		activeStep === step ? 'active' : step < activeStep ? 'complete' : '';
	return (
		<div className="container pb-5">
			<div className="row pb-5">
				<ol className="steps">
					<li className={`step ${className(0)}`}>
						<div className="checkout-header-item">
							<h4 className="step-name">1 Добавить Животного</h4>
						</div>
					</li>
					<li className={`step ${className(1)}`}>
						<div className="checkout-header-item">
							<h4 className="step-name">2 Загрузить фотографию</h4>
						</div>
					</li>
					<li className={`step ${className(2)}`}>
						<div className="checkout-header-item">
							<h4 className="step-name">3 Готово</h4>
						</div>
					</li>
				</ol>
			</div>
			{children}
		</div>
	);
};
export default StepTracker;