import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, DrawerFooter, Button } from "@chakra-ui/react";
import React from "react";
import ItemProduct from './ItemProduct/ItemProduct';

const CartDrawer = ({isOpen, onClose, itemsCart, deleteItemHandler}) => {
	return (
		<Drawer closeOnEsc={true} onClose={onClose} isOpen={isOpen} size={'sm'}  >
			<DrawerOverlay />
			<DrawerContent >
				<DrawerCloseButton />
				<DrawerHeader>Your Cart</DrawerHeader>
				<DrawerBody>
					<div>
						{itemsCart.map((item) => <ItemProduct key={item.id} {...item} deleteItemHandler={deleteItemHandler} />)}
					</div>
				</DrawerBody>
				<DrawerFooter>
           
            <Button colorScheme='blue'>Buy</Button>
          </DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
};

export default CartDrawer;
