import { Swiper } from "swiper/react";

import style from './GalleryCarusel.module.scss'

const GalleryCarusel = ({ children }) => {
	return (
		<Swiper
			className={style.carusel} 
			allowTouchMove={true}
			spaceBetween={50}
			slidesPerView={4}
			onSlideChange={() => console.log("slide change")}
			onSwiper={(swiper) => console.log(swiper)}
		>
			{children}
			
		</Swiper>
	);
};

export default GalleryCarusel;
