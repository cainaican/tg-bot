import React, { useEffect } from 'react'
import Button from '../button/Button'


const Header = () => {

	const tg = window.Telegram.WebApp;

	useEffect(() => {
		tg.ready()
	}, [])
	
	const  onClose = () => {
		tg.close();
	}
	
  return (
	<div className={'header'}>
		<Button onClick={onClose} ></Button>
		<span className= {'username'} >
			{tg.initDataUnsafe?.user?.username}
		</span>
	</div>
  )
}

export default Header