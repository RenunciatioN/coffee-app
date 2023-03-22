import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


import Form from "@/components/Form/Form";
import { useUserStore } from "@/store/store";
import Link from 'next/link'
import { useRouter } from 'next/router'

import style from './Registration.module.scss'


const Registration = () => {
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");


	const setUser = useUserStore((state) => state.setUser);
	const router = useRouter()

	const formHandler =  () => {
		const auth = getAuth();
		 createUserWithEmailAndPassword(auth, email, pass)
			.then(({ user }) => {
				setUser(user.uid, user.email, user.accessToken);
				router.push('/')
			})
			.catch();

		setEmail("");
		setPass("");
	};

	return (
		<div className={style.root}>
			<Form
				title={"Registration"}
				formHandler={formHandler}
				email={email}
				setEmail={setEmail}
				pass={pass}
				setPass={setPass}
			/>
			
				<p>
					Already have an account?  <Link href="/login">Login</Link>
				</p>
			
		</div>
	);
};

export default Registration;
