import { useState } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import Form from "@/components/Form/Form";
import { useUserStore } from "@/store/store";

import style from './Login.module.scss'

const Login = () => {
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");


	const setUser = useUserStore((state) => state.setUser);
	const router = useRouter()

	const formHandler = async () => {
		const auth = getAuth();
		await signInWithEmailAndPassword(auth, email, pass)
			.then(({ user }) => {
				setUser(user.uid, user.email, user.accessToken);
				router.push('/')
			})
			.catch(console.error());

		setEmail("");
		setPass("");
	};

  return (
	<div className={style.root}>
			<Form
				title={"Log In"}
				formHandler={formHandler}
				email={email}
				setEmail={setEmail}
				pass={pass}
				setPass={setPass}
			/>
			
				<p>
					Already have an account?  <Link href="/register">Registration</Link>
				</p>
			
		</div>
  )
}

export default Login