import { useState, useEffect } from "react";
import cl from "classnames";

import { useDisclosure } from "@chakra-ui/react";
import CartDrawer from "./CartDrawer";

import style from "./Cart.module.scss";

import { useCartStore } from '@/store/store';

const Cart = () => {
	const [itemsCart, setItemsCart] = useState([]);
	const { isOpen, onOpen, onClose } = useDisclosure();

	const dataCart = useCartStore(state => state.cart)
	const removeProductCart = useCartStore(state => state.removeProductCart)
	
	useEffect(() => {
		setItemsCart(dataCart)
	}, [dataCart])

	const deleteItemHandler = (id) => {
		removeProductCart(id)
	}

	

	return (
		<>
			<div
				className={style.cart}
				onClick={() => {
					onOpen();
				}}
			>
				{itemsCart.length > 0 ? <div className={style.counter}>{itemsCart.length}</div> : null}
				<div className={style.title}>my busket</div>
				<div className={cl(style.button)}></div>
			</div>

			<CartDrawer
				isOpen={isOpen}
				onClose={onClose}
				itemsCart={itemsCart}
				deleteItemHandler={deleteItemHandler}
			/>
		</>
	);
};

export default Cart;
