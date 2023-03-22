import Link from 'next/link'
import React from 'react'

import style from './MainTitle.module.scss'

const MainTitle = () => {
  return (
	<div className={style.wrapper}>
		<h1>The happiest hour <br /> of the year</h1>
		<div>Sing up to get exclusive access to deeals on drink this holiday season.</div>
		<Link href='' >Send me magic</Link>
	</div>
  )
}

export default MainTitle