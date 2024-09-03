import { useData } from '../../../hook/useData'
import './ContentRenderer.scss'

export const Title = ({ text }: { text: string }) => {
	return <h3 className='ContentRender__title'>{text}</h3>
}

export const TextContent = ({ text }: { text: string }) => {
	return <p className='ContentRender__text'>{text}</p>
}

export const ImageContent = ({ src, atl }: { src: string; atl: string }) => {
	return (
		<div className='ContentRender__block'>
			<img className='ContentRender__image' src={src} alt={atl} />
		</div>
	)
}

export const VideoContent = ({
	src,
	title,
}: {
	src: string
	title?: string // возможно надо поставить ?
}) => {
	return (
		<video controls>
			<source src={src} />
			{title && <track kind='captions' label={title} />}
		</video>
	)
}

interface renderContentInter {
	type: string
	heading: string
	src: string
	atl: string
	text: string
	title?: string
}
export const ContentBlock = ({ content }: any) => {
	const { contentBlog } = useData()
	const renderContent = (item: renderContentInter, index: number) => {
		switch (item.type) {
			case 'heading':
				return <Title key={index} text={item.heading} />
			case 'image':
				return <ImageContent src={item.src} atl={item.atl} key={index} />
			case 'text':
				return <TextContent text={item.text} key={index} />
			case 'video':
				return <VideoContent src={item.src} key={index} />
			default:
				return null
		}
	}
	return (
		<div className='ContentRender__container'>
			{contentBlog.map(renderContent)}
		</div>
	)
}
