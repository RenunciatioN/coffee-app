import React, { useRef } from "react";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@chakra-ui/icons";

// Import Swiper styles
import "swiper/css";

import Product from "./Product/Product";

import getData from "./../utils/getData";
import { useCartStore } from "@/store/store";

import style from "./ProductGallery.module.scss";

const ProductGallery = () => {
	const [products, setProducts] = useState([]);

	const cart = useCartStore((state) => state.addProductToCart);

	const swiperRef = useRef();

	useEffect(() => {
		const productsData = async () => {
			const data = await getData("Products");
			setProducts(data);
		};
		productsData();
	}, []);

	const addToCart = (name, img, size) => {
		cart(name, img, size);
	};

	return (
		<div className={style.gallery}>
			<Swiper
				className={style.carusel}
				allowTouchMove={false}
				slidesPerView={4}
				speed={1000}
				spaceBetween={50}
				onSwiper={(swiper) => {
					swiperRef.current = swiper;
				}}
			>
				{products.map((item) => (
					<SwiperSlide key={item.id}>
						<Product {...item} addToCart={addToCart} />
					</SwiperSlide>
				))}
			</Swiper>
			<ArrowRightIcon
				className={style.arrowRight}
				onClick={() => swiperRef.current.slideNext()}
				boxSize={6}
				color="linkedin.700"
			/>
			<ArrowLeftIcon
				className={style.arrowLeft}
				onClick={() => swiperRef.current.slidePrev()}
				boxSize={6}
				color="linkedin.700"
			/>
		</div>
	);
};

export default ProductGallery;
