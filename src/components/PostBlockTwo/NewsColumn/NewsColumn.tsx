import { memo } from 'react'
import Spinner from '../../Spiner/Spiner'
import NewsBlock from './NewsBlock/NewsBlock'
import './NewsColumn.scss'
interface props {
	props: BlogContent
}
interface BlogContent {
	Content: {
		author: string
		title: string
		description: string
		content: string
		publishedAt: string
		urlToImage: string
		url: string
	}[]
}

const NewsColumnNomemo = (props: BlogContent) => {
	const ColumnPostApi = props.Content.map((el: any) => (
		<NewsBlock
			text={el.title}
			description={el.description}
			img={el.urlToImage}
			author={el.author}
			key={el.title}
			pusblisdate={el.publishedAt}
		/>
	))

	return (
		<section className='newsColumn'>
			{ColumnPostApi ? ColumnPostApi : <Spinner />}
		</section>
	)
}
const NewsColumn = memo(NewsColumnNomemo)

export default NewsColumn
