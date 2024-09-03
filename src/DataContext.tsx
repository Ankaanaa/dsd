import React, { ReactNode, createContext, useRef, useState } from 'react'
import data from './BLL/store'

export const DataContext = createContext<DataContextType>({} as DataContextType)
type ComponentType = {
	children: ReactNode
}

interface DataContextType {
	data: typeof data
	consumerValue: string
	setConsumerValue: React.Dispatch<React.SetStateAction<string>>
	inputValue: string
	setInputValue: React.Dispatch<React.SetStateAction<string>>
	TextAtlSearch: React.MutableRefObject<HTMLInputElement | null>
	contentBlog: any
	setContentBlog: React.Dispatch<any>
}

interface initialStateType {
	data: typeof data
}
let initialState = {}

export const DataProvider: React.FC<ComponentType> = ({ children }) => {
	// Состояния
	const TextAtlSearch = useRef(null)
	const [contentBlog, setContentBlog] = useState<any>()
	const [consumerValue, setConsumerValue] = useState('')
	const [inputValue, setInputValue] = useState('')

	// Объект с данными и состояниями
	const contextValue: DataContextType = {
		contentBlog,
		setContentBlog,
		data,
		consumerValue,
		setConsumerValue,
		inputValue,
		setInputValue,
		TextAtlSearch,
	}

	return (
		<DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
	)
}
