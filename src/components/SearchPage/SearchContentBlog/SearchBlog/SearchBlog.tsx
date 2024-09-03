import { useData } from '../../../../hook/useData'
import './SearchBlog.scss'
import SearchBlogBlock from './SearchBlogBlock/SearchBlogBlock'
interface props {
	SearchState: {}
	CheachSearchList: boolean
	moreDetailsBlog: number
}
interface SearchStateElement {
	id: number
	img?: string
	text?: string
	key?: number
	description?: string
	name?: string
}
const SearchBlog = (props: props) => {
	const { consumerValue } = useData()

	return (
		<section className='SearchBlog'>
			{Array.isArray(props.SearchState) &&
				props.SearchState.slice(0, props.moreDetailsBlog).map(
					(el: SearchStateElement) => (
						<SearchBlogBlock
							text={el.text}
							img={el.img}
							key={el.id}
							description={el.description}
							name={el.name}
							id={el.id}
						/>
					)
				)}
			{props.CheachSearchList && (
				<div className='SeacrhBlog__CantFind'>
					We couldn't find anything matching the term {consumerValue} on Gamebit
				</div>
			)}
		</section>
	)
}

export default SearchBlog
