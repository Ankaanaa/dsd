import { useState } from 'react'
import { useData } from '../../../hook/useData'
import SearchBlog from './SearchBlog/SearchBlog'
import './SearchContentBlog.scss'
interface SearchStateElement {
	id?: number
	img?: string
	text?: string
	key?: number
}
interface props {
	SearchState: {}
	dispatch: React.Dispatch<string>
	setActiveBtn: React.Dispatch<
		React.SetStateAction<HTMLElement | null | string>
	>
	activeBtn: HTMLElement | null | string
	activeRequestBtn: HTMLElement | null
	setActiveRequestBtn: React.Dispatch<React.SetStateAction<HTMLElement | null>>
	CheachSearchList: boolean
}
const SearchContentBlog = (props: props) => {
	const { consumerValue, setConsumerValue } = useData()
	const [moreDetailsBlog, setMoreDetailsBlog] = useState(7)

	const animActiveBtn = (btn: any) => {
		props.setActiveBtn(btn.currentTarget.id)
		if (props.activeRequestBtn) {
			props.setActiveRequestBtn(null)
		}
		if (consumerValue.length > 0) {
			setConsumerValue('')
		}
		switch (btn.currentTarget.id) {
			case '1': {
				return props.dispatch('')
			}
			case '2': {
				return props.dispatch('news')
			}
			case '3': {
				return props.dispatch('game')
			}
			default: {
				return props.dispatch('')
			}
		}
	}

	return (
		<div className='searchContent'>
			<h5 className='searchContent__title'>Filter</h5>
			<div className='searchContent__btnBlock'>
				<button
					className={`searchContent__btn  ${
						props.activeBtn === '1' ? 'activebar' : ''
					}  `}
					id='1'
					onClick={animActiveBtn}
				>
					All
				</button>
				<button
					className={`searchContent__btn searchContent__btn-margin ${
						props.activeBtn === '0' ? 'activebar' : ''
					}  `}
				>
					Рецензии
				</button>
				<button
					className={`searchContent__btn searchContent__btn-margin ${
						props.activeBtn === '2' ? 'activebar' : ''
					}  `}
					id='2'
					onClick={animActiveBtn}
				>
					News
				</button>
				<button
					className={`searchContent__btn searchContent__btn-margin ${
						props.activeBtn === '3' ? 'activebar' : ''
					}  `}
					id='3'
					onClick={animActiveBtn}
				>
					Game
				</button>
			</div>
			<SearchBlog
				moreDetailsBlog={moreDetailsBlog}
				CheachSearchList={props.CheachSearchList}
				SearchState={props.SearchState}
			/>
			<ButtonMoreDetails setMoreDetailsBlog={setMoreDetailsBlog} />
		</div>
	)
}
export const ButtonMoreDetails = (props: any) => {
	return (
		<div>
			<button
				onClick={() => {
					props.setMoreDetailsBlog((prev: number) => prev + 3)
				}}
				className='Btn__moreDetails'
			>
				{' '}
				More Details
			</button>
		</div>
	)
}

export default SearchContentBlog
