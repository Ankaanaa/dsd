import { useState } from 'react'
import { useData } from '../../../../hook/useData'
import './SearchResult.scss'

interface SearchResultInter {
	text: string
	id: number
	Atl: string
	description: string
	img: string
	name: string
}

interface WordMapInter {
	id: number
	text?: Array<string>
	SearchText?: string[] | undefined | string
}
export const SearchResult = (props: any) => {
	const { consumerValue, data, setConsumerValue } = useData()
	const [SearchResultList, setSearchResultList] = useState(
		data.getState().PageContent.AllPost
	)
	const uniqueWords = new Set<string>()

	const SearchNameBlog = SearchResultList.map((el: SearchResultInter) => {
		const namePost = [el.name?.toLowerCase()]
		// debugger

		const Conciedence = namePost
			.filter((name: any) => {
				return name.includes(consumerValue.toLowerCase())
			})
			.filter((name: any) => {
				if (!uniqueWords.has(name)) {
					uniqueWords.add(name)
					return true
				} else {
					return false
				}
			})

		return {
			id: Math.floor(Math.random() * 100000),
			Result: Conciedence,
		}
	})
		.filter((name: any) => {
			return name.Result.length > 0
		})
		.slice(0, 8)
		.map((el: any) => {
			return (
				<li
					key={el.id}
					className='SearchResult__li'
					onClick={() => ResultClick(el.Result.toString())}
				>
					{el.Result}
				</li>
			)
		})
	const ResultClick = (el: string) => {
		props.setIsSearchResult(false)
		props.dispatch(el)
		setConsumerValue(el)
	}

	return (
		<div className='SearchResult'>
			<ul>{SearchNameBlog}</ul>
		</div>
	)
}
