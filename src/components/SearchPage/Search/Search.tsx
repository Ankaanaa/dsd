import { faRotateRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ChangeEvent, useEffect, useState } from 'react'
import { useData } from '../../../hook/useData'
import './Search.scss'
import { SearchResult } from './SearchResult/SearchResult'
interface props {
	dispatch: React.Dispatch<string>
	activeBtn: HTMLElement | null | string
	activeRequestBtn: HTMLElement | null
	setActiveRequestBtn: React.Dispatch<React.SetStateAction<HTMLElement | null>>
	setActiveBtn: React.Dispatch<
		React.SetStateAction<HTMLElement | null | string>
	>
}
const Search = (props: props) => {
	const { setConsumerValue, consumerValue, TextAtlSearch } = useData()
	const [RequestData, setRequestData] = useState<any[]>([])
	const [isSearchResult, setIsSearchResult] = useState<boolean>(false)
	const ChangeInputSearch = (el: ChangeEvent<HTMLInputElement>) => {
		setConsumerValue(el.target.value)
		if (el.target.value.length < 0) {
			setIsSearchResult(false)
		}
		setIsSearchResult(true)
	}
	const addRequestData = (value: string) => {
		if (consumerValue.length > 0) {
			setRequestData(prevData => {
				const newData = [value, ...prevData].slice(0, 5)
				localStorage.setItem('requestName', JSON.stringify(newData))
				// if (newData.length > 4) {
				// 	newData.pop()
				// }
				return newData
			})
		}
	}

	const ClearActiveBtnAndDispatch = () => {
		if (isSearchResult) {
			setIsSearchResult(false)
		}
		if (props.activeRequestBtn) {
			props.setActiveRequestBtn(null)
		}
		if (props.activeBtn) {
			props.setActiveBtn(null)
		}
		props.dispatch(consumerValue)
		addRequestData(consumerValue)
	}

	const SearchHandleEnter = (event: any) => {
		if (event.key === 'Enter') {
			ClearActiveBtnAndDispatch()
		}
	}
	return (
		<div className='search'>
			<div className='search__body'>
				<input
					ref={TextAtlSearch}
					onChange={ChangeInputSearch}
					onKeyDown={SearchHandleEnter}
					value={consumerValue}
					className='search__input'
					type='text'
				/>
				<button className='search__btn' onClick={ClearActiveBtnAndDispatch}>
					Search
				</button>
			</div>
			{consumerValue.length > 0 && isSearchResult && (
				<SearchResult
					setIsSearchResult={setIsSearchResult}
					dispatch={props.dispatch}
					isSearchResult={isSearchResult}
				/>
			)}
			<Request
				isSearchResult={isSearchResult}
				setIsSearchResult={setIsSearchResult}
				RequestData={RequestData}
				setRequestData={setRequestData}
				{...props}
			/>
		</div>
	)
}

const Request = (props: any) => {
	let RequestSearchName = localStorage.getItem('requestName')
	const RequestSearchNameArray = RequestSearchName
		? JSON.parse(RequestSearchName)
		: []
	const { setConsumerValue } = useData()
	const [requestData, setRequestData] = useState(RequestSearchNameArray)
	// let RequestSearchName = localStorage.getItem('requestName')
	// const RequestSearchNameArray = RequestSearchName
	// 	? JSON.parse(RequestSearchName)
	// 	: []

	useEffect(() => {
		setRequestData(RequestSearchNameArray)
	}, [props.RequestData])

	const RequestClick = (el: any) => {
		if (props.isSearchResult) {
			props.setIsSearchResult(false)
		}
		props.setActiveRequestBtn(el)
		if (props.activeBtn) {
			props.setActiveBtn(null)
		}
		props.dispatch(el)
		setConsumerValue(el)
		return () => {
			props.dispatch(el)
			setConsumerValue(el)
		}
	}
	const FilterRequest = requestData.map((el: any, index: number) => (
		<div
			onClick={() => RequestClick(el)}
			className={`Request ${props.activeRequestBtn === el ? 'activebar' : ''}`}
			key={index}
		>
			{el}
		</div>
	))
	const DeleteRequest = () => {
		localStorage.removeItem('requestName')
		props.setRequestData([])
	}
	return (
		<>
			{FilterRequest.length > 0 ? FilterRequest : null}{' '}
			{FilterRequest.length > 0 ? (
				<div onClick={DeleteRequest} className='deleteRequest'>
					<FontAwesomeIcon icon={faRotateRight} />
					<span className='deleteRequest_text'>clear</span>
				</div>
			) : null}
		</>
	)
}

export default Search
