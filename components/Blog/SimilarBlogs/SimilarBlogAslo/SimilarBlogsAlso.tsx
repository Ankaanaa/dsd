import { Link } from 'react-router-dom'

export const SimilarBlogsAlso = (props: any) => {
	// debugger
	return (
		<section className='SimilarBlogs__column'>
			<Link to={`/blog/${props.id}/${props.name}`}>
				<article className='SimilarBlogs__items'>
					<div className='SimilarBlogs__image-block'>
						<img className='SimilarBlogs__image' src={props.img} alt='' />
					</div>

					<div className='SimilarBlogs__descrip'>
						<p className='SimilarBlogs__date'>1 year</p>
						<p className='SimilarBlogs__description'>
							Description adsadas adasas asdasd asdasdasdsa asdasd
						</p>
					</div>
				</article>
			</Link>
		</section>
	)
}
