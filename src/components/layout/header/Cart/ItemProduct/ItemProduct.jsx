import React from 'react'
import Image from "next/image";
import { DeleteIcon, AddIcon } from '@chakra-ui/icons'


import style from './ItemProduct.module.scss'

const ItemProduct = ({name, img, id, quantity, deleteItemHandler}) => {
  return (
	<div className={style.product}>
		<Image src={img} width={40} height={80} alt='coffee' />
		<div className={style.name}>{name}</div>
		
		<div className={style.count}>{quantity}</div>
		
		<DeleteIcon onClick={() => deleteItemHandler(id)} />
	</div>
  )
}

export default ItemProduct 