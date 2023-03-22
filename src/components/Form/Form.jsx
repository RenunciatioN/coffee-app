import { useState } from 'react';
import { useForm } from "react-hook-form";


import style from './Form.module.scss'


const Form = ({title, formHandler, email, setEmail, pass, setPass}) => {
	const { register, handleSubmit } = useForm();
	const [data, setData] = useState('')

  return (
	<div className={style.wrapp}>
			<h1>{title}</h1>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					formHandler(email, pass)
					handleSubmit(data => console.log(data))
				}}
			>
				<input
					{...register("email")}
					placeholder="email"
					onChange={(e) => setEmail(e.target.value)}
					value={email}
				/>
				<input
					{...register("password")}
					placeholder="password"
					onChange={(e) => setPass(e.target.value)}
					value={pass}
				/>
				<input type="submit" />
			</form>

		
		</div>
  )
}

export default Form