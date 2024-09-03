import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import './LoginModal.scss'
export const LoginModal = (props: any) => {
	const [isLogin, setIsLogin] = useState(true)
	const onWrapperClick = (event: any) => {
		if (event.target.classList.contains('modal__wrapper')) {
			props.setIsOpenModal(false)
			setIsLogin(true)
		}
	}
	useEffect(() => {
		if (props.isOpenModal) {
			document.querySelector('.modal')?.classList.add('active')
		} else {
			document.querySelector('.modal')?.classList.remove('active')
		}
	}, [props.isOpenModal])
	if (!props.isOpenModal) return null

	return (
		<>
			<div className={`modal`}>
				<div className='modal__wrapper' onClick={onWrapperClick}>
					<div className='modal__content'>
						<FontAwesomeIcon
							onClick={() => {
								props.setIsOpenModal(false)
								setIsLogin(true)
							}}
							className='modal__close-btn'
							icon={faCircleXmark}
						/>
						<div className='modal__name'>
							Game <span className='modal__name-span'>Bit</span>
						</div>
						{isLogin && (
							<>
								<h3 className='modal__title'>Join for Free or Log in</h3>
								<h6 className='modal__text'>
									Enter your email and we'll check if you already have an
									account. If not, we'll create a new one.
								</h6>
								<div className='modal__clue'>
									<h6 className='modal__email'>Email</h6>
									<h6
										onClick={() => {
											setIsLogin(false)
										}}
										className='modal__email modal__login'
									>
										Or log in with username
									</h6>
								</div>
								<input className='modal__input' type='text' />
								<button className='modal__btn-email'>
									Continue with email
								</button>
							</>
						)}
						{!isLogin && (
							<>
								<h3 className='modal__title'>Log in</h3>
								<h6 className='modal__email__passport'>Email or username</h6>
								<input className='modal__input' type='text' />
								<div className='modal__clue'>
									<h6 className='modal__email'>Password</h6>
									<h6 className='modal__email modal__login'>
										Forgot Password?
									</h6>
								</div>
								<input className='modal__input' type='text' />
								<button className='modal__btn-email'>Log in</button>
							</>
						)}
					</div>
				</div>
			</div>
		</>
	)
}
