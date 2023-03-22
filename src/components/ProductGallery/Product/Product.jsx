import React, { useState } from "react";

import { Button } from "@chakra-ui/react";
import Image from "next/image";

import style from "./Product.module.scss";

const Product = ({name, img, addToCart}) => {
	const [isHover, setIsHover] = useState(false);
	const [isSelectedSize, setIsSelectedSize] = useState(false)
	const [size, setSize] = useState('')

	const SIZES = ["SHORT", "TALL", "GRANDE", "VENTI"];

	const sizeHandler = (e, size) => {
		e.target.classList.toggle(style.activeSizeBtn)
		setSize(size)
		setIsSelectedSize(true)
	}

	return (
		<div
			className={style.card}
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
		>
			<div className={style.carusel}>
				<Image
					src={img}
					width={166}
					height={366}
					alt="p"
				/>
			</div>
			<h3>{name}</h3>

			{isHover ? (
				<>
					<div className={style.sizeBtns}>
						{SIZES.map((size) => (
							<button key={size} onClick={(e) => sizeHandler(e, size)} className={style.sizeBtn}>{size}</button>
						))}
					</div>
					<Button colorScheme="teal" variant="outline" className={style.toCart} onClick={() => isSelectedSize ? addToCart(name, img, size) : alert('размер не выбран')}>
						Add to Cart
					</Button>
				</>
			) : (
				<ul>
					<span>Colories:</span>
					<li>
						<span>Total Fat 19g</span>
						<span>29%</span>
					</li>
					<li>
						<span>Saturated Fat 13g</span>
						<span>65%</span>
					</li>
					<li>
						<span>Trans Fat 0.5g</span>
					</li>
				</ul>
			)}
		</div>
	);
};

export default Product;
