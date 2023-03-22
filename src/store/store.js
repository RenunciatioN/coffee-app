import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { nanoid } from "nanoid";

export const useCartStore = create(
	devtools(
		persist(
			(set) => ({
				cart: [],
				addProductToCart: (name, img, size) => {
					set((state) => {
						const itemCart = {
							id: nanoid(),
							name: name,
							img: img,
							size: size,
							quantity: 1,
						};

						return { cart: [...state.cart, itemCart] };
					});
				},

				removeProductCart: (id) =>
					set((state) => {
						const newCart = state.cart.filter(
							(item) => item.id !== id
						);
						return { cart: newCart };
					}),
			}),

			{
				name: "cart",
			}
		)
	)
);

export const useUserStore = create(
	devtools(
		persist(
			(set) => ({
				user: {
					id: null,
					email: null,
					token: null,
				},
				setUser: (id, email, token) =>
					set((state) => {
						return {
							user: {
								id: id,
								email: email,
								token: token,
							},
						};
					}),
				removeUser: () =>
					set((state) => {
						const newUser = {
							email: null,
							id: null,
							token: null,
						};

						return { user: newUser };
					}),
			}),
			{
				name: "user",
			}
		)
	)
);
