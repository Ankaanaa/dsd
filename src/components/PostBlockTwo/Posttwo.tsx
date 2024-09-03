import { NewsColumnType, PostAndNewsBlockType } from '../../BLL/store'
import { withBlogMap } from '../../hoc/WithBlogMap'
import News from '../News/News'
import Posts from '../Posts/Posts'
import Headline from './Headline/Headline'
import NewsColumn from './NewsColumn/NewsColumn'
import './PostTwo.scss'
import ScrollBlog from './ScrollBlog/ScrollBlog'
interface props {
	Post: {
		Post: PostAndNewsBlockType[]
		News: PostAndNewsBlockType[]
		NewsColumn: NewsColumnType[]
		Notes: 'Рекомендуем'
		NotesNews: 'Новости'
	}
	isSize: boolean
	BlogContent: BlogContent | undefined
}
interface BlogContent {
	articles: {
		author: string
		title: string
		description: string
		content: string
		publishedAt: string
		urlToImage: string
		url: string
	}[]
}
const PosttwoK = (props: props) => {
	const WithBlogNewsColumn: any = withBlogMap(NewsColumn)
	const WithBlogScrollBlog = withBlogMap(ScrollBlog)
	return (
		<div>
			<Posts Post={props.Post.Post} />
			<Headline Notes={props.Post.Notes} />
			<News News={props.Post.News} />
			<Headline NotesNews={props.Post.NotesNews} />
			<WithBlogNewsColumn Content={props.BlogContent} />
			<WithBlogScrollBlog Content={props.BlogContent} />
		</div>
	)
}

export default PosttwoK
