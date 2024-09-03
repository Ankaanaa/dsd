import { useEffect, useState } from 'react'
import { useData } from '../../hook/useData'
import Search from './Search/Search'
import SearchContentBlog from './SearchContentBlog/SearchContentBlog'
import './SearchPage.scss'
const SearchPage = (props: any) => {
	const [activeBtn, setActiveBtn] = useState<HTMLElement | null | string>(null)
	const [activeRequestBtn, setActiveRequestBtn] = useState<HTMLElement | null>(
		null
	)
	const { consumerValue } = useData()
	useEffect(() => {
		if (consumerValue.length <= 0 && activeBtn === null) {
			props.dispatch('')
		}
	}, [consumerValue])

	return (
		<div className='Search__wrapper'>
			<div className='Search__container'>
				<h2 className='Search__title'>Search</h2>
				<Search
					activeBtn={activeBtn}
					setActiveBtn={setActiveBtn}
					dispatch={props.dispatch}
					activeRequestBtn={activeRequestBtn}
					setActiveRequestBtn={setActiveRequestBtn}
				/>
				<SearchContentBlog
					activeBtn={activeBtn}
					setActiveRequestBtn={setActiveRequestBtn}
					setActiveBtn={setActiveBtn}
					activeRequestBtn={activeRequestBtn}
					// dispatch={props.dispatch}
					// SearchState={props.SearchState}
					// CheachSearchList={props.CheachSearchList}
					{...props}
				/>
			</div>
		</div>
	)
}

export default SearchPage
