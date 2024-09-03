import { useState } from 'react'
import { useData } from '../../hook/useData'
import './PostCreation.scss'
interface ContentItem {
	TitleName: string
	TitleImage: string
	GameName: string
}
export const PostCreation = () => {
	const [valueTextarea, setValueTextarea] = useState('')
	const [titleNameBlog, setTitleNameBlog] = useState('')
	const [valueNameGame, setValueNameGame] = useState('')
	const [valueImageBlog, setValueImageBlog] = useState('')
	const [valueDescription, setValueDescription] = useState('')
	const [SmallWordsError, setSmallWordsError] = useState('1')
	const { setContentBlog, data } = useData()
	const ChangeValue = (el: any, setValue: any) => {
		setValue(el.target.value)
	}

	const HandleClearImageUrl = () => {
		setValueImageBlog('')
	}
	const HandleBlur = (el: string, number: number) => {
		if (el.length > number) {
			return true
		} else {
			setSmallWordsError(el)
		}
	}

	const SmallWord = ({ number }: { number: number }) => {
		return (
			<>
				<span className='too__few__words'>
					Must be at least {number} letters
				</span>
			</>
		)
	}
	const ParseContent = () => {
		const lines = valueTextarea.split('\n')
		const contentData: any = []
		const dataBase = data._state.PageContent.AllPost
		if (
			titleNameBlog.length < 50 ||
			valueDescription.length < 20 ||
			valueTextarea.length < 500 ||
			valueNameGame.length < 3 ||
			valueImageBlog.length < 20
		) {
			return contentData
		}
		if (titleNameBlog.length > 0) {
			contentData.push({ type: 'TitleName', TitleName: titleNameBlog })
		}
		if (valueNameGame.length > 0) {
			contentData.push({ type: 'GameName', GameName: valueNameGame })
		}
		if (valueImageBlog.length > 0) {
			contentData.push({ type: 'TitleImage', TitleImage: valueImageBlog })
		}
		if (valueDescription.length > 0) {
			contentData.push({ Description: valueDescription })
		}

		lines.forEach(line => {
			line = line.trim()
			if (line.startsWith('#')) {
				line = line.slice(1).trim()
				contentData.push({ type: 'heading', heading: line })
				// Object.assign(content, { title: line })
			} else if (line.startsWith('![')) {
				const atl: string = line.match(/\!\[(.*?)\]/)![1]
				const src: string = line.match(/\((.*?)\)/)![1]
				// Object.assign(content, { img: img, atl: atl })
				contentData.push({ type: 'image', src: src, atl: atl })
			} else if (line.startsWith('[video](')) {
				const video = line.match(/\((.*?)\)/)![1]
				contentData.push({ type: 'video', src: video })
				// Object.assign(content, { video: video })
			} else {
				contentData.push({ type: 'text', text: line })
				// Object.assign(content, { text: line })
			}
		})

		if (contentData && contentData[0] && contentData[3] && contentData[1]) {
			dataBase.unshift({
				text: contentData?.[0]?.TitleName,
				img: contentData?.[2]?.TitleImage,
				name: contentData?.[1]?.GameName,
				description: contentData?.[3].Description,
				id: Math.floor(Math.random() * 100000),
				Atl: 'vvvvv',
			})
		} else {
			console.error('content is undefined or does not have enough elements.')
		}
		setContentBlog(contentData)
	}

	return (
		<div className='PostCreation'>
			<div className='PostCreation__title'>Create Post</div>
			<ul className='PostCreation__ul'>
				{' '}
				Правила написания публикации
				<li className='PostCreation_li'>Заголовок начинается с #</li>
				<li className='PostCreation_li'>
					Изображение начинается с !{`[atl-text](url)`}
				</li>
				<li className='PostCreation_li'>Видео начинается с {`[video](url)`}</li>
				<li className='PostCreation_li'>
					к Обычному тексту ничего не нужно вначало писать
				</li>
			</ul>
			<div className='PostCreation__title__blog'>Название публикации</div>
			<input
				className={`PostCreation__create__title ${
					SmallWordsError === titleNameBlog ? 'border__red' : ''
				}`}
				value={titleNameBlog}
				onBlur={() => {
					HandleBlur(titleNameBlog, 50)
				}}
				onChange={el => {
					ChangeValue(el, setTitleNameBlog)
				}}
				type='text'
			/>
			{SmallWordsError.length < 50 && SmallWordsError === titleNameBlog && (
				<SmallWord number={50} />
			)}
			<div className='PostCreation__description__title'>Короткое описание</div>
			<textarea
				value={valueDescription}
				onChange={el => {
					ChangeValue(el, setValueDescription)
				}}
				onBlur={() => {
					HandleBlur(valueDescription, 20)
				}}
				className={`PostCreation__description__input ${
					SmallWordsError === valueDescription ? 'border__red' : ''
				}`}
			/>
			{SmallWordsError.length < 20 && SmallWordsError === valueDescription && (
				<SmallWord number={20} />
			)}
			<div className='PostCreation__image__title'>
				Главная изображение поста
			</div>
			<input
				value={valueImageBlog}
				onChange={el => {
					ChangeValue(el, setValueImageBlog)
				}}
				onBlur={() => {
					HandleBlur(valueImageBlog, 20)
				}}
				className={`PostCreation__create__image-title ${
					SmallWordsError === valueImageBlog ? 'border__red' : ''
				}`}
				type='text'
			/>
			{valueImageBlog && (
				<span
					onClick={HandleClearImageUrl}
					className='PostCreation__clear__url'
				>
					clear
				</span>
			)}
			{SmallWordsError.length < 20 && SmallWordsError === valueImageBlog && (
				<SmallWord number={20} />
			)}
			{valueImageBlog.startsWith('h') && (
				<div className='PostCreation__image'>
					<img className='PostCreation__icon' src={valueImageBlog} alt='' />
				</div>
			)}
			<textarea
				value={valueTextarea}
				onChange={el => {
					ChangeValue(el, setValueTextarea)
				}}
				onBlur={() => {
					HandleBlur(valueTextarea, 500)
				}}
				className={`PostCreation__textarea ${
					SmallWordsError === valueTextarea ? 'border__red' : ''
				}`}
				name=''
				id=''
			></textarea>
			{SmallWordsError.length < 500 && SmallWordsError === valueTextarea && (
				<SmallWord number={500} />
			)}
			<div className='PostCreation__game-name'>Название игры</div>
			<input
				onChange={el => {
					ChangeValue(el, setValueNameGame)
				}}
				onBlur={() => {
					HandleBlur(valueNameGame, 500)
				}}
				value={valueNameGame}
				className={`PostCreation__game__input ${
					SmallWordsError === valueNameGame ? 'border__red' : ''
				}`}
				type='text'
			/>
			{SmallWordsError.length < 3 && SmallWordsError === valueNameGame && (
				<SmallWord number={3} />
			)}
			<button className='PostCreation__parse' onClick={ParseContent}>
				Create
			</button>
		</div>
	)
}
