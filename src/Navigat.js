import React from 'react'

function Navigat() {
	return (
		<nav className='Navigat'>
			<img className='Verx' src='./img/verx.jpg' alt='verx' />
			<ul className='Navigacia'>
				<li>ГЛАВНАЯ</li>
				<li>КРАСОТА & ЗДОРОВЬЕ</li>
				<li>МОДА & СТИЛЬ</li>
				<li>ДОМ & БЫТ</li>
				<li>ОТНОШЕНИЯ</li>
				<li>ДЕТИ</li>
				<li>ОБЩЕСТВО</li>
				<button placeholder='Поисковая фраза' className='But'></button>
			</ul>
		</nav>
	)
}

export default Navigat
