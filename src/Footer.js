import React from 'react'

function Footer() {
	return (
		<footer className='Footer'>
			<div>
				<img src='../img/footer1.jpg' alt='linia' />
				<img className='Cartinka' src='../img/footer.jpg' alt='cartinka' />
				<img className='Cart' src='../img/cart.jpg' alt='cart' />
			</div>
			<nav className='Nav'>
				<a href='#'>КОНТАКТЫ</a>
				<a href='#'>ГОРОСКОП</a>
				<a href='#'>АРХИВ</a>
				<a href='#'>ГОЛОСОВАНИЯ</a>
				<a href='#'>КАРТА САЙТА</a>
			</nav>
		</footer>
	)
}

export default Footer