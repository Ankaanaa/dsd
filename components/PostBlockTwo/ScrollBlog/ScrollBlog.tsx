import { memo } from 'react'
import './ScrollBlog.scss'

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

interface NewsColumnProps {
	Content: BlogContent | undefined
}
const ScrollBlogK = (props: BlogContent) => {
	return (
		<section className='ScrollBlog'>
			{props.Content && <h2>Recent Game Reviews</h2>}
			<BlogNameBlock Content={props.Content} />
		</section>
	)
}
const ScrollBlog = memo(ScrollBlogK)
export default ScrollBlog

export const BlogNameBlock = (props: BlogContent) => {
	const BlogAPIContent = props.Content.map((el: any) => (
		<ContentBlogScroll title={el.title} key={el.url} img={el.urlToImage} />
	))

	return (
		<article className='ScrollBlog__blog'>
			<div className='ScrollBlog__body'>{BlogAPIContent}</div>
		</article>
	)
}

interface ContenBlog {
	title: string | undefined
	urlToImage: string | undefined
}

const ContentBlogScroll = (props: any) => {
	return (
		<div className={`ScrollBlog__column `}>
			<div className='ScrollBlog__icon'>
				<img className='ScrollBlog__img' src={props.img} alt='' />
			</div>
			<h4 className='ScrollBlog__text'>{props.title}</h4>
		</div>
	)
}
