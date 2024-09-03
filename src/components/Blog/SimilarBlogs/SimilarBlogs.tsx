import { SimilarBlogsAlso } from './SimilarBlogAslo/SimilarBlogsAlso'
import './SimilarBlogs.scss'
export const SimilarBlogs = (props: any) => {
	const AlsoBlogMap = props.Blogs.filter((el: any) => {
		return el.name.trim() === props.Name.trim() && el.id !== props.id
	})
		.slice(0, 4)
		.map((el: any) => {
			return (
				<SimilarBlogsAlso
					key={el.id}
					img={el.img}
					description={el.description}
					name={el.name}
					id={el.id}
				/>
			)
		})

	return (
		<article className='SimilarBlogs'>
			<h4 className='SimilarBlogs__title'>See also</h4>
			<div className='SimilarBlogs__content'>
				<div className='SimilarBlogs__blogs'>
					{AlsoBlogMap}
					{/* <SimilarBlogsAlso />
					<SimilarBlogsAlso /> */}
				</div>
			</div>
		</article>
	)
}
