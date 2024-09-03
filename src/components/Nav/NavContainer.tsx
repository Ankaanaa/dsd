import React, { useState } from 'react'
import Nav from './Nav'

type props = {
	setSize: React.Dispatch<React.SetStateAction<boolean>>
	isSize: boolean
	dispatch: React.Dispatch<string>
	setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

const NavContainer = (props: props) => {
	const [isVisible, setIsVisible] = useState(true)
	const [isCollapse, setIsCollapse] = useState(false)

	const toggleVisibility = () => {
		setIsVisible(!isVisible)
		setIsCollapse(!isCollapse)
		props.setSize(!props.isSize)
	}

	return (
		<Nav
			isVisible={isVisible}
			isCollapse={isCollapse}
			dispatch={props.dispatch}
			toggleVisibility={toggleVisibility}
			setIsOpenModal={props.setIsOpenModal}
		/>
	)
}

export default NavContainer
