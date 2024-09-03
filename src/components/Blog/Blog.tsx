import { useData } from '../../hook/useData'
import { ContentBlock } from '../PostCreation/ContentRenderer/ContentRenderer'
import './Blog.scss'
import { SimilarBlogs } from './SimilarBlogs/SimilarBlogs'

export const Blog = (props: any) => {
	const { contentBlog } = useData()
	const ScrollUp = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}
	ScrollUp()
	return (
		<article className='Blog'>
			<h4 className='Blog__name'>{props.name}</h4>
			<h1 className='Blog__title'>{props.text}</h1>
			<div className='Blog__image-size'>
				<img className='Blog__image' src={props.img} alt='' />
			</div>
			{contentBlog && <ContentBlock />}
			<div>{props.content}</div>
			{props.id && (
				<SimilarBlogs Blogs={props.Blogs} Name={props.name} id={props.id} />
			)}
		</article>
	)
}
