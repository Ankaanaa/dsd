import { faDungeon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LinkSvg from './Links/Link/Linksvg'
import Links from './Links/Links'
import './Nav.scss'

type props = {
	isCollapse: boolean
	isVisible: boolean
	toggleVisibility: () => void
	dispatch: React.Dispatch<string>
	setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

const Nav = (props: props) => {
	return (
		<div className={`sidebar ${props.isCollapse ? 'sidebar__collapse' : ''}`}>
			<div className='sidebar__title'>
				<div
					className={`sidebar__title__icon ${
						props.isCollapse ? 'sidebar__collapse-title' : ''
					}`}
				>
					<div className='sidebar__icon'>
						<img
							className='sidebar__image'
							src='https://ltdfoto.ru/images/2024/06/27/LogoWhiteFon.png'
							alt=''
						/>
					</div>
					{props.isVisible && (
						<div className='sidebar__text'>
							<div className='sidebar__name'>
								Game<span className='sidebar__span'>bit</span>
							</div>
						</div>
					)}
				</div>
			</div>
			<div></div>
			<button className='sidebar__btn' onClick={props.toggleVisibility}>
				<FontAwesomeIcon icon={faDungeon} className='sidebar__svg-toggle' />
				<span className='sidebar__svg-text'>Adventure</span>{' '}
				<span className='sidebar__svg-text-2'>Go?</span>
			</button>
			{props.isVisible && (
				<Links
					setIsOpenModal={props.setIsOpenModal}
					dispatch={props.dispatch}
				/>
			)}
			{!props.isVisible && (
				<LinkSvg toggleVisibility={props.toggleVisibility} />
			)}
		</div>
	)
}

export default Nav
