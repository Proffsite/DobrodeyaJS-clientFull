import { useEffect, useState } from "react";
import Image from "next/image";

// const Box = styled.div`
//   position: fixed;
//   z-index: 0;
//   top: 0;
// `;
interface StepSrcImage {
	srcImage: string;
}

function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
}

const BGImage: React.FC<StepSrcImage> = ({ srcImage }) => {
	const [width, setWidth] = useState<number>();
	const [height, setheight] = useState<number>();
	useEffect(() => {
		const { width, height } = getWindowDimensions();

		setWidth(width);

		setheight(height);
	}, []);

	useEffect(() => {
		function handleResize() {
			const { width, height } = getWindowDimensions();

			setWidth(width);

			setheight(height);
		}

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	if (width && height) {
		return (
			<>
				<Image
					src={srcImage}
					alt="BGimage"
					width={width}
					height={height}
				/>
			</>
		);
	}

	return null;
}

export default BGImage;