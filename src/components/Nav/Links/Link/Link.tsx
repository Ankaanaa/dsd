import { faDAndD, faFortAwesome } from '@fortawesome/free-brands-svg-icons'
import { faDragon, faScroll, faTrophy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ChangeEvent, KeyboardEvent } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useData } from '../../../../hook/useData'
import './Link.scss'

const Link = (props: any) => {
	const { setConsumerValue, inputValue, setInputValue } = useData()
	const navigate = useNavigate()
	const handleKeyEnter = (event: KeyboardEvent) => {
		if (event.key === 'Enter') {
			// if (inputValue.length > 0) {
			setConsumerValue(inputValue)
			props.dispatch(inputValue)
			setInputValue('')
			navigate('/search')
			window.scrollTo({ top: 0, behavior: 'smooth' })
			// }
		}
	}
	const ScrollUp = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}
	const OnChangeValue = (el: ChangeEvent<HTMLInputElement>) => {
		setInputValue(el.target.value)
	}
	return (
		<div className='link'>
			<div className='link__li'>
				<FontAwesomeIcon icon={faFortAwesome} className='links__svg' />
				<span className='link__span'>
					<NavLink className='NavLink__link' to='/home' onClick={ScrollUp}>
						Главная
					</NavLink>
				</span>
			</div>
			<div className='link__li'>
				<FontAwesomeIcon icon={faDAndD} className='links__svg' />{' '}
				<span className='link__span'>
					<NavLink onClick={ScrollUp} className='NavLink__link' to='/search'>
						Новости
					</NavLink>{' '}
				</span>
			</div>
			<div className='link__li'>
				<FontAwesomeIcon icon={faDragon} className='links__svg' />{' '}
				<span className='link__span'>
					{' '}
					<NavLink
						onClick={ScrollUp}
						className='NavLink__link'
						to='/create-post'
					>
						Обзоры
					</NavLink>
				</span>
			</div>
			<div className='link__li'>
				<FontAwesomeIcon icon={faScroll} className='links__svg links__svg-4' />{' '}
				<span className='link__span'>Руководства и советы</span>
			</div>
			<div className='link__li'>
				<FontAwesomeIcon icon={faTrophy} className='links__svg links__svg-5' />{' '}
				<span className='link__span'>Рейтинги и топы</span>
			</div>
			<input
				onKeyDown={handleKeyEnter}
				value={inputValue}
				onChange={OnChangeValue}
				className='link__search'
				type='text'
				name=''
				id=''
			/>
			<div
				className='link__modal-btn'
				onClick={() => {
					props.setIsOpenModal(true)
				}}
			>
				Login
			</div>
		</div>
	)
}

export default Link
