import {
	faCalendarDay,
	faComment,
	faUser,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import './SearchBlogBlock.scss'
interface props {
	text?: string
	img?: string
	key?: number
	description?: string
	name?: string
	id: number
}

const SearchBlogBlock = (props: props) => {
	return (
		<article key={props.key} className={`SearchBlogBlock`}>
			<Link
				className='SearchBlogBlock__link'
				to={`/blog/${props.id}/${props.name}`}
			>
				<div className='searcstst'>
					<div className='SearchBlogBlock__image'>
						<img className='SearchBlogBlock__icon' src={props.img} alt='' />
					</div>
					<div className='SearchBlogBlock__info'>
						<h3>{props.text}</h3>
						<h5>{props.description}</h5>
						<div className='NewsBlock__user'>
							<div className=''>
								<FontAwesomeIcon className='svg-icon' icon={faUser} /> by{' '}
								<span className='autor-name'>gaayy</span> |
							</div>
							<div className='NewsBlock__margin'>
								<FontAwesomeIcon className='svg-icon' icon={faCalendarDay} /> 30
								Jule |
							</div>
							<div className='NewsBlock__margin'>
								<FontAwesomeIcon className='svg-icon' icon={faComment} /> 0
								Comments
							</div>
						</div>
					</div>
				</div>
			</Link>
		</article>
	)
}

export default SearchBlogBlock
